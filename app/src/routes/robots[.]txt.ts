import { createFileRoute } from "@tanstack/react-router";

import { SITE_URL } from "../lib/site";

// Must agree with the Cloudflare AI-bot rule at the edge: search crawlers that
// govern citability are allowed; model-training crawlers are blocked there, so
// they are disallowed here too. Do not let this file say the opposite of what
// the edge does.
const ROBOTS = `User-agent: *
Allow: /

# AI search crawlers. These govern whether the site is cited in AI answers. Allowed.
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: DuckAssistBot
Allow: /

# AI training crawlers. Blocked at the CDN edge; stated here for consistency.
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

# Gemini/Vertex training and grounding (does not affect Google Search or AI Overviews)
User-agent: Google-Extended
Allow: /

# Apple Intelligence training (does not affect Siri, Spotlight or Safari)
User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () =>
        new Response(ROBOTS, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        }),
    },
  },
});
