import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { bindings } from "../../lib/bindings.server";

// Intake proxy for the remodeler landing page pop-up (go.vantumintelligence.com).
// The page posts here instead of straight to the GHL inbound webhook, so the
// webhook URL stays a server secret and every submission is origin-checked,
// schema-checked, rate-limited and (when TURNSTILE_SECRET is set) human-checked
// before it can create a contact or trigger a text.

const ALLOWED_ORIGINS = new Set(["https://go.vantumintelligence.com"]);
const MAX_BODY_BYTES = 8_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60_000;

// Linear-time email pattern (WHATWG input[type=email]); zod's default can backtrack.
const SAFE_EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const short = z.string().trim().max(200);
const count = z.number().int().min(0).max(100_000_000).nullable();

const submission = z.object({
  path: z.enum(["review", "email-findings"]),
  first_name: short.optional(),
  email: z.string().trim().max(200).email({ pattern: SAFE_EMAIL_PATTERN }),
  phone: z.string().trim().max(40).optional(),
  website: z
    .string()
    .trim()
    .max(300)
    .regex(/^https?:\/\/[^\s<>"']+$/i)
    .optional(),
  revenue: short,
  crews: short,
  lead_source_reported: short,
  sms_consent: z.enum(["yes", "no"]),
  tally_entered: z.boolean(),
  estimates_sent: count,
  estimates_won: count,
  avg_job: count,
  page: z.string().trim().max(2000),
  submitted_at: z.string().trim().max(40),
  utm_source: short.optional(),
  utm_medium: short.optional(),
  utm_campaign: short.optional(),
  utm_term: short.optional(),
  utm_content: short.optional(),
  fbclid: z.string().trim().max(500).optional(),
  gclid: z.string().trim().max(500).optional(),
  // Honeypot: hidden on the page, so only bots fill it.
  company_fax: z.string().max(200).optional(),
  turnstile_token: z.string().max(4000).optional(),
});

function cors(origin: string | null): Record<string, string> {
  if (!origin || !ALLOWED_ORIGINS.has(origin)) return { Vary: "Origin" };
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function reply(status: number, body: Record<string, unknown>, origin: string | null) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...cors(origin) },
  });
}

async function sha256(text: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Fails open: a missing table or D1 outage must not cost a real lead.
async function overLimit(ip: string) {
  const { DB } = bindings();
  if (!DB) return false;
  try {
    const now = Date.now();
    const ipHash = await sha256(ip);
    const row = await DB.prepare(
      `SELECT COUNT(*) AS n FROM path_review_hits WHERE ip_hash = ?1 AND created_at > ?2`,
    )
      .bind(ipHash, now - RATE_WINDOW_MS)
      .first<{ n: number }>();
    if ((row?.n ?? 0) >= RATE_LIMIT) return true;
    await DB.batch([
      DB.prepare(`INSERT INTO path_review_hits (ip_hash, created_at) VALUES (?1, ?2)`).bind(
        ipHash,
        now,
      ),
      DB.prepare(`DELETE FROM path_review_hits WHERE created_at < ?1`).bind(now - RATE_WINDOW_MS),
    ]);
    return false;
  } catch (error) {
    console.error("path-review rate limit unavailable", error);
    return false;
  }
}

async function isHuman(secret: string, token: string | undefined, ip: string) {
  if (!token) return false;
  const form = new FormData();
  form.set("secret", secret);
  form.set("response", token);
  if (ip) form.set("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  if (!res.ok) return false;
  const out = (await res.json()) as { success?: boolean };
  return out.success === true;
}

export const Route = createFileRoute("/api/path-review")({
  server: {
    handlers: {
      // Without this, GET falls through to SSR and returns the site shell with
      // a 200, which is both indexable and indistinguishable from a successful
      // submission.
      GET: async () =>
        new Response(null, {
          status: 405,
          headers: { Allow: "POST, OPTIONS", "Cache-Control": "no-store" },
        }),
      OPTIONS: async ({ request }) =>
        new Response(null, { status: 204, headers: cors(request.headers.get("Origin")) }),

      POST: async ({ request }) => {
        const origin = request.headers.get("Origin");
        if (!origin || !ALLOWED_ORIGINS.has(origin)) return reply(403, { ok: false }, null);

        const { GHL_WEBHOOK_URL, TURNSTILE_SECRET } = bindings();
        if (!GHL_WEBHOOK_URL) {
          console.error("path-review: GHL_WEBHOOK_URL secret is not set");
          return reply(503, { ok: false }, origin);
        }

        const raw = await request.text();
        if (raw.length > MAX_BODY_BYTES) return reply(413, { ok: false }, origin);

        let json: unknown;
        try {
          json = JSON.parse(raw);
        } catch {
          return reply(400, { ok: false }, origin);
        }
        const parsed = submission.safeParse(json);
        if (!parsed.success) return reply(400, { ok: false }, origin);

        const { company_fax, turnstile_token, ...lead } = parsed.data;
        // Quiet no-op so a bot can't tell the field is a trap.
        if (company_fax) return reply(200, { ok: true }, origin);
        // The review path books a call and may text; it needs a phone number.
        if (lead.path === "review" && (lead.phone ?? "").replace(/\D/g, "").length < 10) {
          return reply(400, { ok: false }, origin);
        }

        const ip = request.headers.get("CF-Connecting-IP") ?? "";
        if (TURNSTILE_SECRET && !(await isHuman(TURNSTILE_SECRET, turnstile_token, ip))) {
          return reply(403, { ok: false, reason: "challenge" }, origin);
        }
        if (await overLimit(ip)) return reply(429, { ok: false }, origin);

        const forwarded = await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
        if (!forwarded.ok) {
          console.error("path-review: webhook answered", forwarded.status);
          return reply(502, { ok: false }, origin);
        }
        return reply(200, { ok: true }, origin);
      },
    },
  },
});
