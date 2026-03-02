/**
 * api/admin/blog/route.ts
 * Admin-only blog management endpoints.
 * All routes require a valid admin JWT cookie (checked via getAdminFromRequest).
 *
 * GET  /api/admin/blog   — list all posts (any status)
 * POST /api/admin/blog   — create a new post
 */

import { NextRequest, NextResponse } from "next/server";
import { getAdminFromRequest } from "@/lib/auth";
import { adminGetAllPosts, adminCreatePost } from "@/lib/blog";
import { generateSlug } from "@/lib/markdown";
import type { CreatePostInput } from "@/lib/blog";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(req: NextRequest) {
  if (!(await getAdminFromRequest(req))) return unauthorized();
  const posts = await adminGetAllPosts();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  if (!(await getAdminFromRequest(req))) return unauthorized();

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  const {
    title, subtitle, excerpt, content, category,
    tags, author_name, status, featured,
    og_image_url, seo_title, seo_description, related_protocol_slug,
  } = body;

  if (!title || !excerpt || !content || !category) {
    return NextResponse.json(
      { error: "title, excerpt, content, and category are required" },
      { status: 400 }
    );
  }

  // Auto-generate slug from title if not provided
  const slug: string = (body.slug as string)?.trim() || generateSlug(title as string);

  const input: CreatePostInput = {
    slug,
    title: title as string,
    subtitle: subtitle as string | undefined,
    excerpt: excerpt as string,
    content: content as string,
    category: category as string,
    tags: Array.isArray(tags) ? (tags as string[]) : [],
    author_name: (author_name as string) || "Yannick Wolfe",
    status: (status as "draft" | "published" | "archived") || "draft",
    featured: Boolean(featured),
    og_image_url: og_image_url as string | undefined,
    seo_title: seo_title as string | undefined,
    seo_description: seo_description as string | undefined,
    related_protocol_slug: related_protocol_slug as string | undefined,
  };

  const post = await adminCreatePost(input);
  return NextResponse.json(post, { status: 201 });
}
