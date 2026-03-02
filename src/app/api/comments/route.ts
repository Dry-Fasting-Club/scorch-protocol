import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

// ── GET /api/comments?section=<slug> ───────────────────────────────────────
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("section");
  if (!slug) {
    return NextResponse.json({ error: "section param required" }, { status: 400 });
  }

  const rows = await sql`
    SELECT id, author_name, body, submitted_at, parent_id, is_admin_reply
    FROM comments
    WHERE section_slug = ${slug}
      AND status = 'approved'
    ORDER BY submitted_at ASC
    LIMIT 200
  `;

  return NextResponse.json(rows);
}

// ── POST /api/comments ─────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    sectionSlug,
    authorName,
    body: commentBody,
    hcaptchaToken,
    website,
    parentId,
  } = body;

  // Server-side honeypot check
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Basic field validation
  if (
    typeof sectionSlug !== "string" || !sectionSlug.trim() ||
    typeof authorName !== "string" || !authorName.trim() ||
    typeof commentBody !== "string" || !commentBody.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (authorName.length > 100 || commentBody.length > 2000) {
    return NextResponse.json({ error: "Content too long" }, { status: 400 });
  }

  // Validate parentId if provided — must be a top-level comment in the same section
  const resolvedParentId: number | null = typeof parentId === "number" ? parentId : null;
  if (resolvedParentId !== null) {
    const parent = await sql`
      SELECT id FROM comments
      WHERE id = ${resolvedParentId}
        AND section_slug = ${sectionSlug.trim()}
        AND parent_id IS NULL
      LIMIT 1
    `;
    if (!parent.length) {
      return NextResponse.json({ error: "Invalid parent comment" }, { status: 400 });
    }
  }

  // hCaptcha verification
  if (!hcaptchaToken) {
    return NextResponse.json({ error: "Captcha required" }, { status: 400 });
  }

  const captchaRes = await fetch("https://api.hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET_KEY!,
      response: hcaptchaToken,
      remoteip: ip,
    }),
  });
  const captchaData = await captchaRes.json();
  if (!captchaData.success) {
    return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
  }

  // Rate limit: max 3 comments per IP per hour
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const recentRows = await sql`
    SELECT COUNT(*) as count
    FROM comments
    WHERE ip_address = ${ip}
      AND submitted_at > ${oneHourAgo}
  `;
  const recentCount = Number(recentRows[0]?.count ?? 0);
  if (recentCount >= 3) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait an hour before commenting again." },
      { status: 429 }
    );
  }

  // Insert comment as pending
  await sql`
    INSERT INTO comments (section_slug, author_name, body, ip_address, hcaptcha_ok, parent_id)
    VALUES (
      ${sectionSlug.trim()},
      ${authorName.trim()},
      ${commentBody.trim()},
      ${ip},
      true,
      ${resolvedParentId}
    )
  `;

  return NextResponse.json({ ok: true });
}
