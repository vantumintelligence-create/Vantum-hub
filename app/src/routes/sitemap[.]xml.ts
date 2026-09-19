import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const today = new Date().toISOString().split("T")[0];
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
              `    <lastmod>${today}</lastmod>\n` +
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
