import type { MetadataRoute } from "next";

// AI / LLM search crawlers we explicitly welcome — AI search is a primary
// discovery channel for this audience. Already covered by the "*" rule, but
// naming them future-proofs against generic bot-blocking at the CDN layer.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
];

const DISALLOW = ["/admin/", "/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    ],
    sitemap: "https://scorchprotocol.com/sitemap.xml",
  };
}
