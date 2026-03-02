/**
 * lib/markdown.ts
 * Markdown parsing utilities used by blog post pages and the admin editor preview.
 *
 * Uses the `marked` library (server-safe, no DOM required).
 * Content is TRUSTED (admin-only input) so no HTML sanitization is applied.
 * See ARCHITECTURE.md — "Security: Blog Content" for reasoning.
 */

import { Marked } from "marked";

export interface HeadingItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface ParsedMarkdown {
  html: string;
  headings: HeadingItem[];
}

/**
 * Convert a heading string to a URL-safe anchor ID.
 * e.g. "Why T3 Tests Lie" → "why-t3-tests-lie"
 */
export function headingToId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Parse Markdown to HTML.
 * Extracts H2/H3 headings and adds `id` anchors for the table of contents.
 * Returns { html, headings }.
 */
export function parseMarkdown(content: string): ParsedMarkdown {
  const headings: HeadingItem[] = [];

  const markedInstance = new Marked({
    gfm: true,
    breaks: false,
    renderer: {
      heading({ text, depth }) {
        const level = Number(depth);
        if (level === 2 || level === 3) {
          const id = headingToId(text);
          headings.push({ id, text, level: level as 2 | 3 });
          return `<h${level} id="${id}">${text}</h${level}>\n`;
        }
        return `<h${depth}>${text}</h${depth}>\n`;
      },
    },
  });

  const html = markedInstance.parse(content) as string;
  return { html, headings };
}

/**
 * Estimate reading time in minutes.
 * Uses 238 wpm — calibrated for medium-difficulty medical content.
 */
export function estimateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 238));
}

/** Count words in a markdown string (used when saving posts to DB). */
export function countWords(content: string): number {
  return content.trim().split(/\s+/).length;
}

/**
 * Generate a URL-safe slug from a post title.
 * e.g. "Why T3 Blood Tests Lie" → "why-t3-blood-tests-lie"
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
