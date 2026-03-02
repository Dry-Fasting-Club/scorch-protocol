/**
 * api/blog/route.ts
 * Public blog API.
 * GET /api/blog               — list published posts (supports ?category=, ?tag=, ?limit=, ?page=)
 * Not used by the Next.js pages (they query the DB directly for performance),
 * but available for external integrations or future mobile app use.
 */

import { NextRequest, NextResponse } from "next/server";
import { getPublishedPosts } from "@/lib/blog";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const category = searchParams.get("category") ?? undefined;
  const tag = searchParams.get("tag") ?? undefined;
  const limit = Math.min(50, Math.max(1, Number(searchParams.get("limit") ?? 20)));
  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const offset = (page - 1) * limit;

  const posts = await getPublishedPosts({ category, tag, limit, offset });
  return NextResponse.json(posts);
}
