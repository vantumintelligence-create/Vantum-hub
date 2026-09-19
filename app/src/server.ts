import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { applySecurityHeaders } from "./lib/security-headers.server";

// Hosts we own outright. They are never framed by the Higgsfield builder, so
// they get the framing lock and the http -> https redirect.
const OWNED_HOSTS = new Set(["vantumintelligence.com", "www.vantumintelligence.com"]);

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    const owned = OWNED_HOSTS.has(url.hostname);
    // One canonical form per page: apex host, https, no trailing slash. All
    // three are normalised in a single hop so redirect chains stay short.
    const canonicalPath = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;
    const canonicalHost =
      url.hostname === "www.vantumintelligence.com" ? "vantumintelligence.com" : url.host;

    // Only GET and HEAD are ever redirected. A 301 on POST makes browsers
    // re-issue the request as GET and drop the body, and browsers treat ANY
    // 3xx on a CORS preflight as a hard failure — either one would silently
    // break the /api/path-review submissions.
    const isSafeMethod = request.method === "GET" || request.method === "HEAD";
    const needsRedirect =
      isSafeMethod &&
      ((owned && url.protocol === "http:") ||
        canonicalPath !== url.pathname ||
        canonicalHost !== url.host);

    if (needsRedirect) {
      // https is forced only on hosts we own. The Higgsfield-hosted preview and
      // local dev keep their own scheme, and `owned` (not a hardcoded true)
      // decides framing, so the builder's cross-origin iframe still works.
      const scheme = owned ? "https" : url.protocol.replace(":", "");
      const target = `${scheme}://${canonicalHost}${canonicalPath}${url.search}`;
      return applySecurityHeaders(Response.redirect(target, 301), owned);
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return applySecurityHeaders(await normalizeCatastrophicSsrResponse(response), owned);
    } catch (error) {
      console.error(error);
      return applySecurityHeaders(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
        owned,
      );
    }
  },
};
