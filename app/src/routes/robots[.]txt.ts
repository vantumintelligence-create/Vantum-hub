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
          "# AI search/answer crawlers: these govern whether the site can be cited",
          "# in generated answers, so they are named explicitly.",
          "User-agent: OAI-SearchBot",
          "Allow: /",
          "",
          "User-agent: ChatGPT-User",
          "Allow: /",
          "",
          "User-agent: Claude-SearchBot",
          "Allow: /",
          "",
          "User-agent: DuckAssistBot",
          "Allow: /",
          "",
          "User-agent: PerplexityBot",
          "Allow: /",
          "",
          "# Training-only crawlers: these harvest content to train models and do",
          "# not cite the site in answers. Blocked. Keep this in sync with the",
          "# Cloudflare AI-bot rule at the edge; robots.txt and the edge must agree.",
          "User-agent: GPTBot",
          "Disallow: /",
          "",
          "User-agent: ClaudeBot",
          "Disallow: /",
          "",
          "User-agent: anthropic-ai",
          "Disallow: /",
          "",
          "User-agent: CCBot",
          "Disallow: /",
          "",
          "User-agent: Bytespider",
          "Disallow: /",
          "",
          "User-agent: Applebot-Extended",
          "Disallow: /",
          "",
          "# Google-Extended governs Gemini grounding as well as training, so it stays",
          "# allowed: blocking it would cost citations in the Gemini app.",
          "User-agent: Google-Extended",
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
