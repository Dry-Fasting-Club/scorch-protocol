import { NextRequest, NextResponse } from "next/server";
import { getAdminFromRequest } from "@/lib/auth";
import { getSignedUploadUrl } from "@/lib/r2";

const ALLOWED_TYPES: Record<string, string> = {
  "video/mp4": "mp4",
  "video/webm": "webm",
  "application/pdf": "pdf",
};

// ── POST /api/admin/upload-url  { sectionSlug, contentType } ──────────────
// Returns a pre-signed R2 PUT URL + the object key that will be stored in DB.
export async function POST(req: NextRequest) {
  const adminId = await getAdminFromRequest(req);
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { sectionSlug, contentType } = body;
  if (typeof sectionSlug !== "string" || !sectionSlug.trim()) {
    return NextResponse.json({ error: "sectionSlug required" }, { status: 400 });
  }

  const ext = ALLOWED_TYPES[contentType];
  if (!ext) {
    return NextResponse.json(
      { error: "contentType must be video/mp4, video/webm, or application/pdf" },
      { status: 400 }
    );
  }

  // Object key: sections/<slug>/content.<ext>
  const objectKey = `sections/${sectionSlug.replace(/\//g, "_")}/content.${ext}`;

  const uploadUrl = await getSignedUploadUrl(objectKey, contentType, 900); // 15 min

  return NextResponse.json({ uploadUrl, objectKey });
}
