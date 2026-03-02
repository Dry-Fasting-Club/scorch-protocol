-- ============================================================
-- Migration 002: paid_content_items JSONB + email_subscribers table
-- Run against your Neon PostgreSQL database after 001_schema.sql.
-- Safe to re-run (all statements use IF NOT EXISTS / IF NOT EXISTS).
-- ============================================================

-- Add JSONB column for multi-item paid content per section.
-- Each element: { type, title, description, key, duration_minutes?, page_count? }
ALTER TABLE sections
  ADD COLUMN IF NOT EXISTS paid_content_items JSONB DEFAULT '[]';

-- ──────────────────────────────────────────────────────────
-- Email subscribers (newsletter / email capture)
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS email_subscribers (
  id           SERIAL PRIMARY KEY,
  email        VARCHAR(255) UNIQUE NOT NULL,
  source       VARCHAR(100),                      -- e.g. 'blog-footer', 'home-hero'
  confirmed    BOOLEAN     DEFAULT FALSE,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_email_subscribers_email
  ON email_subscribers (email);
