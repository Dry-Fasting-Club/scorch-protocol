/**
 * api/admin/blog/[id]/route.ts
 * Admin CRUD for a single blog post.
 *
 * GET    /api/admin/blog/:id  — fetch post (any status)
 * PATCH  /api/admin/blog/:id  — partial update
 * DELETE /api/admin/blog/:id  — permanently delete
 */

import { NextRequest, NextResponse } from "next/server";
import { getAdminFromRequest } from "@/lib/auth";
import { adminGetPostById, adminUpdatePost, adminDeletePost } from "@/lib/blog";
import type { UpdatePostInput } from "@/lib/blog";

interface Params {
  params: Promise<{ id: string }>;
}

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(req: NextRequest, { params }: Params) {
  if (!(await getAdminFromRequest(req))) return unauthorized();
  const { id } = await params;
  const post = await adminGetPostById(Number(id));
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await getAdminFromRequest(req))) return unauthorized();
  const { id } = await params;

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  const input: UpdatePostInput = {};

  const fields: (keyof UpdatePostInput)[] = [
    "title", "slug", "subtitle", "excerpt", "content", "category",
    "tags", "author_name", "status", "featured", "og_image_url",
    "seo_title", "seo_description", "related_protocol_slug",
  ];

  for (const field of fields) {
    if (field in body) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (input as any)[field] = body[field];
    }
  }

  const post = await adminUpdatePost(Number(id), input);
  return NextResponse.json(post);
}

export async function DELETE(req: NextRequest, { params }: Params) {
  if (!(await getAdminFromRequest(req))) return unauthorized();
  const { id } = await params;
  await adminDeletePost(Number(id));
  return NextResponse.json({ ok: true });
}
