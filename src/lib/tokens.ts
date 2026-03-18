import { randomBytes } from "crypto";
import { cookies } from "next/headers";
import sql from "./db";

const TOKEN_PREFIX = "sp_access_";

/** Generate a cryptographically random 64-char hex token */
export function generateAccessToken(): string {
  return randomBytes(32).toString("hex");
}

/** Cookie name for a given section slug */
export function accessCookieName(sectionSlug: string): string {
  return TOKEN_PREFIX + sectionSlug.replace(/\//g, "_");
}

/** Set the access cookie for a section (HTTP-only, 1-year lifetime) */
export async function setAccessCookie(
  sectionSlug: string,
  token: string
): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(accessCookieName(sectionSlug), token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });
}

/** Read the raw token from the cookie store (server-side only) */
export async function getAccessToken(
  sectionSlug: string
): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(accessCookieName(sectionSlug))?.value ?? null;
}

/** Validate token against the DB — returns true if a matching purchase exists */
export async function validateAccessToken(
  sectionSlug: string,
  token: string
): Promise<boolean> {
  const rows = await sql`
    SELECT id FROM purchases
    WHERE section_slug = ${sectionSlug}
      AND access_token = ${token}
    LIMIT 1
  `;
  return rows.length > 0;
}

/** Check if the current request has valid access for a section */
export async function hasAccess(sectionSlug: string): Promise<boolean> {
  // Check section-specific access first
  const token = await getAccessToken(sectionSlug);
  if (token && await validateAccessToken(sectionSlug, token)) return true;

  // Check bundle (full-protocol) access
  const bundleToken = await getAccessToken("bundle");
  if (!bundleToken) return false;
  return validateAccessToken("bundle", bundleToken);
}
