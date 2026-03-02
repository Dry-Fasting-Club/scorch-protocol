import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";
import { getAdminFromRequest } from "@/lib/auth";

// ── PATCH /api/comments/[id]  { action: "approve" | "reject" } ────────────
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const adminId = await getAdminFromRequest(req);
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const commentId = parseInt(id, 10);
  if (isNaN(commentId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const body = await req.json().catch(() => ({}));
  const { action } = body;
  if (action !== "approve" && action !== "reject") {
    return NextResponse.json({ error: "action must be 'approve' or 'reject'" }, { status: 400 });
  }

  const newStatus = action === "approve" ? "approved" : "rejected";

  const result = await sql`
    UPDATE comments
    SET status = ${newStatus}
    WHERE id = ${commentId}
    RETURNING id
  `;

  if (!result.length) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true, id: commentId, status: newStatus });
}
