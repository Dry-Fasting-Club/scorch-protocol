/**
 * app/blog/[slug]/ViewTracker.tsx
 * Invisible client component that fires a POST to increment the view count
 * once on mount. Fire-and-forget — never blocks render, never shows errors.
 */

"use client";

import { useEffect } from "react";

export default function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    fetch(`/api/blog/${slug}/view`, { method: "POST" }).catch(() => {});
  }, [slug]);

  return null;
}
