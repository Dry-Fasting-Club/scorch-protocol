import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";
import bcrypt from "bcryptjs";
import { signAdminToken, ADMIN_COOKIE } from "@/lib/auth";

// ── POST /api/admin/login  { email, password } ─────────────────────────────
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, password } = body;
  if (typeof email !== "string" || typeof password !== "string") {
    return NextResponse.json({ error: "email and password required" }, { status: 400 });
  }

  const rows = await sql`
    SELECT id, password_hash FROM admin_users WHERE email = ${email.toLowerCase()} LIMIT 1
  `;

  if (!rows.length) {
    // Constant-time guard — still run bcrypt even on miss
    await bcrypt.compare(password, "$2b$12$invalidhashtopreventtiming");
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const admin = rows[0];
  const valid = await bcrypt.compare(password, admin.password_hash);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await signAdminToken(admin.id);

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 12, // 12 hours
    path: "/",
  });
  return res;
}
