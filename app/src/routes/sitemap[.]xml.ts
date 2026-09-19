import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        // No <lastmod>. It used to be stamped with the request date, which told
        // crawlers every page had changed today on every single fetch. Omitting
        // the element is better than publishing a value we cannot substantiate;
        // reinstate it per-route only with real content-change dates.
        const routes = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/services", priority: "0.9", changefreq: "monthly" },
          { path: "/work", priority: "0.7", changefreq: "monthly" },
          { path: "/about", priority: "0.6", changefreq: "monthly" },
        ];
        const urls = routes
          .map(
            (r) =>
              `  <url>\n` +
              `    <loc>${origin}${r.path === "/" ? "" : r.path}</loc>\n` +
              `    <changefreq>${r.changefreq}</changefreq>\n` +
              `    <priority>${r.priority}</priority>\n` +
              `  </url>`,
          )
          .join("\n");
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          urls,
          "</urlset>",
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
