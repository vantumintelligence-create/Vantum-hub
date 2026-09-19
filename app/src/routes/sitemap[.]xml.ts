import { createFileRoute } from "@tanstack/react-router";

import { PAGE_LASTMOD, SITE_URL } from "../lib/site";

const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/remodeler-marketing", priority: "0.9", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/work", priority: "0.7", changefreq: "monthly" },
  { path: "/about", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = ROUTES.map(
          (r) =>
            `  <url>\n` +
            `    <loc>${SITE_URL}${r.path === "/" ? "" : r.path}</loc>\n` +
            `    <lastmod>${PAGE_LASTMOD[r.path]}</lastmod>\n` +
            `    <changefreq>${r.changefreq}</changefreq>\n` +
            `    <priority>${r.priority}</priority>\n` +
            `  </url>`,
        ).join("\n");
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
