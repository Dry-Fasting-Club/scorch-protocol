import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";
import { getSignedContentUrl } from "@/lib/r2";
import { getAccessToken, validateAccessToken } from "@/lib/tokens";

// ── GET /api/content/[section] ─────────────────────────────────────────────
// Returns a time-limited signed R2 URL if the user has a valid access token.
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  // [section] may be a single segment, but slug can contain a slash (e.g. faq/kidneys)
  // So we also accept ?slug= as an override
  const { section } = await params;
  const sectionSlug = req.nextUrl.searchParams.get("slug") ?? section;

  // Validate cookie token
  const token = await getAccessToken(sectionSlug);
  if (!token || !(await validateAccessToken(sectionSlug, token))) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  // Load section metadata
  const rows = await sql`
    SELECT paid_content_type, paid_content_key, published
    FROM sections
    WHERE slug = ${sectionSlug}
    LIMIT 1
  `;

  if (!rows.length || !rows[0].published || !rows[0].paid_content_key) {
    return NextResponse.json({ error: "Content not available" }, { status: 404 });
  }

  const { paid_content_type, paid_content_key } = rows[0];

  // Generate a signed URL valid for 1 hour
  const signedUrl = await getSignedContentUrl(paid_content_key, 3600);

  return NextResponse.json({ url: signedUrl, type: paid_content_type });
}
