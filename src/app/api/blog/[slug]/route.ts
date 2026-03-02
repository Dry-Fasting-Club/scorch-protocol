/**
 * api/blog/[slug]/route.ts
 * GET  /api/blog/:slug      — fetch a single published post
 * POST /api/blog/:slug/view — increment view count (called by ViewTracker client component)
 */

import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug, incrementViewCount } from "@/lib/blog";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}

// View count endpoint: POST /api/blog/:slug/view
// Note: this is handled by a sub-route at /api/blog/[slug]/view/route.ts
// The POST here is a fallback that does the same thing for simplicity.
export async function POST(_req: NextRequest, { params }: Params) {
  const { slug } = await params;
  await incrementViewCount(slug);
  return NextResponse.json({ ok: true });
}
