import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";
import { getAdminFromRequest } from "@/lib/auth";

// ── GET /api/admin/sections ────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const adminId = await getAdminFromRequest(req);
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await sql`
    SELECT slug, title, paid_content_type, paid_content_key, price_cents, published
    FROM sections
    ORDER BY slug
  `;

  return NextResponse.json(rows);
}

// ── PATCH /api/admin/sections  { slug, paid_content_type?, paid_content_key?, published?, price_cents? }
export async function PATCH(req: NextRequest) {
  const adminId = await getAdminFromRequest(req);
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body.slug !== "string") {
    return NextResponse.json({ error: "slug required" }, { status: 400 });
  }

  const { slug, paid_content_type, paid_content_key, published, price_cents } = body;

  // Build dynamic update — only update fields that were provided
  const updates: Record<string, unknown> = {};
  if (paid_content_type !== undefined) updates.paid_content_type = paid_content_type;
  if (paid_content_key !== undefined) updates.paid_content_key = paid_content_key;
  if (published !== undefined) updates.published = Boolean(published);
  if (price_cents !== undefined) updates.price_cents = Number(price_cents);

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "No fields to update" }, { status: 400 });
  }

  // Execute individual field updates to keep query simple
  if ("paid_content_type" in updates) {
    await sql`UPDATE sections SET paid_content_type = ${updates.paid_content_type as string | null} WHERE slug = ${slug}`;
  }
  if ("paid_content_key" in updates) {
    await sql`UPDATE sections SET paid_content_key = ${updates.paid_content_key as string | null} WHERE slug = ${slug}`;
  }
  if ("published" in updates) {
    await sql`UPDATE sections SET published = ${updates.published as boolean} WHERE slug = ${slug}`;
  }
  if ("price_cents" in updates) {
    await sql`UPDATE sections SET price_cents = ${updates.price_cents as number} WHERE slug = ${slug}`;
  }

  const updated = await sql`SELECT * FROM sections WHERE slug = ${slug} LIMIT 1`;
  return NextResponse.json(updated[0] ?? { ok: true });
}
