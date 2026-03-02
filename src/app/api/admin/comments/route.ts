import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";
import { getAdminFromRequest } from "@/lib/auth";

// ── GET /api/admin/comments?status=pending|approved|rejected ───────────────
export async function GET(req: NextRequest) {
  const adminId = await getAdminFromRequest(req);
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const status = req.nextUrl.searchParams.get("status") ?? "pending";
  if (!["pending", "approved", "rejected"].includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const rows = await sql`
    SELECT id, section_slug, author_name, body, status, submitted_at, ip_address
    FROM comments
    WHERE status = ${status}
    ORDER BY submitted_at DESC
    LIMIT 200
  `;

  return NextResponse.json(rows);
}
