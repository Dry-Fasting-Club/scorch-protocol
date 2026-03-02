import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const ADMIN_COOKIE = "sp_admin";
const secret = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET!);

export async function signAdminToken(adminId: number): Promise<string> {
  return new SignJWT({ sub: String(adminId) })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(secret);
}

export async function verifyAdminToken(
  token: string
): Promise<{ sub: string } | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as { sub: string };
  } catch {
    return null;
  }
}

/** Returns admin ID from the cookie, or null if not authenticated */
export async function getAdminFromCookie(): Promise<number | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  const payload = await verifyAdminToken(token);
  if (!payload) return null;
  return Number(payload.sub);
}

/** Returns admin ID from a NextRequest (used in API routes) */
export async function getAdminFromRequest(
  req: NextRequest
): Promise<number | null> {
  const token = req.cookies.get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  const payload = await verifyAdminToken(token);
  if (!payload) return null;
  return Number(payload.sub);
}

export { ADMIN_COOKIE };
