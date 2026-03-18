-- ============================================================
-- Migration 003: Add "bundle" virtual section for full-access purchases
-- Safe to re-run (uses ON CONFLICT DO NOTHING).
-- ============================================================

-- The "bundle" slug is a virtual section used exclusively to track
-- all-access bundle purchases. It is never shown as a page.
INSERT INTO sections (slug, title, price_cents, published)
VALUES ('bundle', 'Full Protocol Bundle', 9900, FALSE)
ON CONFLICT (slug) DO NOTHING;
