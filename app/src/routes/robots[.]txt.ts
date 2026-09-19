import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = [
          "User-agent: *",
          "Allow: /",
          "",
          "# AI answer-engine crawlers: allowed to reference this site in generated answers",
          "User-agent: GPTBot",
          "Allow: /",
          "",
          "User-agent: ChatGPT-User",
          "Allow: /",
          "",
          "User-agent: Google-Extended",
          "Allow: /",
          "",
          "User-agent: PerplexityBot",
          "Allow: /",
          "",
          "User-agent: ClaudeBot",
          "Allow: /",
          "",
          "User-agent: anthropic-ai",
          "Allow: /",
          "",
          "User-agent: Applebot-Extended",
          "Allow: /",
          "",
          `Sitemap: ${origin}/sitemap.xml`,
        ].join("\n");
        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
