import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../bindings.server";

// zod's default z.string().email() pattern has a quantified group
// ([A-Za-z0-9_'+\-.]*) immediately followed by an overlapping character
// class, which is polynomial-time on a long, unanchored input with no "@" —
// exactly what an anonymous POST body to this public endpoint can supply.
// This is the standard WHATWG/HTML5 input[type=email] pattern instead: it
// only ever backtracks linearly.
const SAFE_EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const leadInput = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email({ pattern: SAFE_EMAIL_PATTERN }).max(200),
  phone: z.string().trim().max(40).optional(),
  business: z.string().trim().max(160).optional(),
  message: z.string().trim().max(2000).optional(),
  // Honeypot: a hidden field real visitors never fill in. Bots that
  // autofill every input trip it, so we quietly no-op instead of writing a
  // row — left unrestricted here so a filled-in value doesn't fail
  // validation and tip off what the field is for.
  website: z.string().max(500).optional(),
});

const RATE_LIMIT_WINDOW_MS = 60_000;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(leadInput)
  .handler(async ({ data }) => {
    if (data.website) {
      return { id: crypto.randomUUID() };
    }

    const { DB } = bindings();
    if (!DB) {
      throw new Error("Lead storage is not available right now.");
    }

    const cutoff = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
    const recent = await DB.prepare(`SELECT id FROM leads WHERE email = ?1 AND created_at > ?2 LIMIT 1`)
      .bind(data.email, cutoff)
      .first<{ id: string }>();
    if (recent) {
      throw new Error("We already have your request and are on it — no need to send another.");
    }

    const id = crypto.randomUUID();
    await DB.prepare(
      `INSERT INTO leads (id, name, email, phone, business, message, created_at)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)`,
    )
      .bind(
        id,
        data.name,
        data.email,
        data.phone ?? null,
        data.business ?? null,
        data.message ?? null,
        new Date().toISOString(),
      )
      .run();
    return { id };
  });
