/**
 * api/email-subscribe/route.ts
 * POST /api/email-subscribe
 *
 * 1. Validates email format.
 * 2. Upserts into email_subscribers table (idempotent — duplicate emails return 200).
 * 3. If BREVO_API_KEY is set, also subscribes via the Brevo (Sendinblue) API.
 *    Brevo failure is logged but does NOT cause the endpoint to fail — DB is source of truth.
 *
 * Env vars:
 *   BREVO_API_KEY        — Brevo v3 API key (optional)
 *   BREVO_LIST_ID        — Brevo contact list ID, e.g. "3" (optional, required with BREVO_API_KEY)
 */

import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function syncToBrevo(email: string): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;
  if (!apiKey || !listId) return;

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [Number(listId)],
      updateEnabled: true, // Re-subscribe if previously unsubscribed
    }),
  });

  if (!res.ok && res.status !== 204) {
    const body = await res.text().catch(() => "");
    console.error("[email-subscribe] Brevo sync failed:", res.status, body);
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, source } = body;

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const normalised = email.trim().toLowerCase();
  const src = typeof source === "string" ? source.slice(0, 100) : null;

  // Upsert — ignore duplicate emails gracefully
  await sql`
    INSERT INTO email_subscribers (email, source)
    VALUES (${normalised}, ${src})
    ON CONFLICT (email) DO NOTHING
  `;

  // Fire-and-forget Brevo sync (non-blocking, non-fatal)
  syncToBrevo(normalised).catch(() => {});

  return NextResponse.json({ ok: true });
}
