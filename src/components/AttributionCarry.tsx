"use client";
import { useEffect } from "react";

/**
 * Carries where a visitor came from into the members portal sign-up link
 * (John, 2026-10-01), so a member who joins can be traced to the video or post
 * that brought them. No cookie and no browser storage: the first page's utm_*
 * values, the referring site and the landing path are held in this module's
 * memory (which survives client-side navigation and is gone on a reload or in
 * a new tab) and appended to links into members.scorchprotocol.com at the
 * moment they are pressed. The portal's /buy page reads them.
 */
const PORTAL_HOST = "members.scorchprotocol.com";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const MAX_LEN = 120;

let captured: Record<string, string> | null = null;

function captureOnce() {
  if (captured !== null) return;
  const out: Record<string, string> = {};
  const qs = new URLSearchParams(window.location.search);
  for (const key of UTM_KEYS) {
    const v = qs.get(key);
    if (v) out[key] = v.slice(0, MAX_LEN);
  }
  try {
    if (document.referrer) {
      const host = new URL(document.referrer).hostname;
      if (host && host !== window.location.hostname) out.ref_host = host;
    }
  } catch {
    /* an unparseable referrer is simply not recorded */
  }
  out.lp = window.location.pathname.slice(0, MAX_LEN);
  captured = out;
}

function decorate(href: string): string {
  if (!captured) return href;
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return href;
  }
  if (url.hostname !== PORTAL_HOST) return href;
  for (const [key, value] of Object.entries(captured)) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  return url.toString();
}

export default function AttributionCarry() {
  useEffect(() => {
    captureOnce();
    // Rewrite on press rather than on click so middle-click, long-press and
    // "open in new tab" all carry the values too.
    const onPress = (e: Event) => {
      const target = e.target as Element | null;
      const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const next = decorate(a.href);
      if (next !== a.href) a.href = next;
    };
    document.addEventListener("mousedown", onPress, true);
    document.addEventListener("touchstart", onPress, { capture: true, passive: true });
    document.addEventListener("keydown", onPress, true);
    return () => {
      document.removeEventListener("mousedown", onPress, true);
      document.removeEventListener("touchstart", onPress, true);
      document.removeEventListener("keydown", onPress, true);
    };
  }, []);
  return null;
}
