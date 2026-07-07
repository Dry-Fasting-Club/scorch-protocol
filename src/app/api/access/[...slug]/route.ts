import { NextResponse } from "next/server";
import { hasAccess } from "@/lib/tokens";

// Per-user access check for a section's paid deep-dive.
//
// The protocol/faq pages are static (CDN-cached) — the paywall teaser is the
// same markup for every visitor. This tiny route is what a paid visitor's
// browser calls (from PaidContentClient) to flip the block to its unlocked
// state. It reads the httpOnly access cookie, so it is always dynamic and never
// cached. Catch-all so faq slugs with a slash (e.g. "faq/kidneys") resolve.
//
// This is UI-only. The real content gate stays server-side at /content/[slug]
// and /api/content, so a tampered/forged response here cannot expose content.
export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const sectionSlug = (slug ?? []).join("/");
  if (!sectionSlug) return NextResponse.json({ unlocked: false });

  try {
    return NextResponse.json({ unlocked: await hasAccess(sectionSlug) });
  } catch {
    // Fail closed (locked) on any error; the real gate is at /content/[slug].
    return NextResponse.json({ unlocked: false });
  }
}
