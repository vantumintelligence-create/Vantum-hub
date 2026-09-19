/**
 * Security headers applied to every Worker response. Wired up in app/src/server.ts.
 *
 * `lockFraming` is true only on hosts we own outright (the custom domain,
 * where no hosting platform injects a frame-ancestors allowlist). The
 * Higgsfield-hosted preview keeps framing open — see the note below.
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
  // the preview) and leave framing entirely to the platform. On a host we own
  // (`lockFraming`) there is no platform header and no builder iframe, so the
  // lock is applied there and only there.
  //
  // font-src: the bundled Quanta fonts are same-origin, but Vite inlines the
  // smaller woff2 files as `data:` URIs inside the stylesheet, so `data:` is
  // required or those faces are blocked. fonts.googleapis.com / fonts.gstatic.com
  // stay allowed so the policy still holds if the Google Fonts stylesheet is
  // ever put back.
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://assets.calendly.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com; " +
      "font-src 'self' data: https://fonts.gstatic.com https://assets.calendly.com; " +
      "img-src 'self' data: https:; media-src 'self' https:; " +
      "connect-src 'self' https:; " +
      "frame-src https://calendly.com; " +
      "base-uri 'self'; form-action 'self'; object-src 'none'" +
      (lockFraming ? "; frame-ancestors 'self'" : ''),
  );
  if (lockFraming) headers.set('X-Frame-Options', 'SAMEORIGIN');
  // 180 days. `preload` is deliberately NOT set: submitting to the browser
  // preload list is close to irreversible and is the user's call, not ours.
  headers.set('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  headers.set('X-XSS-Protection', '0');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
