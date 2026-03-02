/**
 * components/BlogPostRenderer.tsx
 * Server component that renders a blog post's markdown content as HTML.
 * Heading IDs are injected by parseMarkdown() for anchor linking.
 * Content is trusted (admin-only input) — no client-side sanitization needed.
 */

import { parseMarkdown } from "@/lib/markdown";

interface Props {
  content: string;
}

export default function BlogPostRenderer({ content }: Props) {
  const { html } = parseMarkdown(content);

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
