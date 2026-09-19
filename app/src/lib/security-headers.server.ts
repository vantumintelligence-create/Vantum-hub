/**
 * Security headers applied to every Worker response. Import in app/src/server.ts
 * and wrap the final response: `return applySecurityHeaders(response)`.
 *
 * `lockFraming` is true on hosts that are never embedded (the custom domain,
 * deployed straight to our own Cloudflare account, where no platform header
 * exists). The Higgsfield-hosted preview keeps framing open — see below.
 */
export function applySecurityHeaders(response: Response, lockFraming = false): Response {
  const headers = new Headers(response.headers);
  // Framing: the Supercomputer Design-mode inspector + preview render this app
  // cross-origin inside an iframe. The Higgsfield hosting platform injects the
  // canonical `frame-ancestors` allowlist on every app response, so this app
  // MUST NOT set its own — browsers intersect multiple CSP headers, so a second
  // (stricter) list here can only ever subtract from the platform's allowlist
  // and silently block the embed. We also deliberately do NOT set
  // `X-Frame-Options` (no cross-origin allowlist; SAMEORIGIN/DENY would blank
  // the preview) and leave framing entirely to the platform.
  headers.set(
    "Content-Security-Policy",
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://assets.calendly.com; " +
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com; " +
      "font-src 'self'; " +
      "img-src 'self' data: https:; media-src 'self' https:; " +
      "connect-src 'self' https:; " +
      "frame-src https://calendly.com; " +
      "base-uri 'self'; form-action 'self'; object-src 'none'" +
      (lockFraming ? "; frame-ancestors 'self'" : ""),
  );
  if (lockFraming) headers.set("X-Frame-Options", "SAMEORIGIN");
  // 180 days, per the action plan. `includeSubDomains` is safe: go.vantumintelligence.com
  // already 301s http -> https. `preload` is deliberately NOT set — submitting to the
  // browser preload list is close to irreversible.
  headers.set("Strict-Transport-Security", "max-age=15552000; includeSubDomains");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set("X-XSS-Protection", "0");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
