/**
 * api/rss/route.ts
 * GET /api/rss — RSS 2.0 feed of the 20 most recent published blog posts.
 * Linked from the site <head> via autodiscovery in app/layout.tsx.
 * Cache-Control: public, max-age=3600 (refresh every hour).
 */

import { NextResponse } from "next/server";
import { getPostsForRss } from "@/lib/blog";

const SITE_URL = "https://scorchprotocol.com";
const FEED_TITLE = "The Scorch Protocol Blog";
const FEED_DESCRIPTION =
  "Evidence-based articles on Long Covid, ME/CFS, dry fasting, T3 therapy, and full recovery from chronic illness.";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getPostsForRss(20);

  const items = posts
    .map((post) => {
      const pubDate = post.published_at
        ? new Date(post.published_at).toUTCString()
        : "";
      const link = `${SITE_URL}/blog/${post.slug}`;
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <author>yannick@scorchprotocol.com (${escapeXml(post.author_name)})</author>
    </item>`.trim();
    })
    .join("\n    ");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/api/rss" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
