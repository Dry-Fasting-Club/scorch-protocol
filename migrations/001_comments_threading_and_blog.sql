-- ============================================================
-- Migration 001: Comment threading + blog tables
-- Run once against your Neon database.
-- ============================================================

-- ── Comments: add threading columns ─────────────────────────
ALTER TABLE comments
  ADD COLUMN IF NOT EXISTS parent_id    INTEGER REFERENCES comments(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN NOT NULL DEFAULT false;

-- Index for fast reply lookups
CREATE INDEX IF NOT EXISTS idx_comments_parent_id ON comments(parent_id);

-- ── Blog posts ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
  id                    SERIAL PRIMARY KEY,
  slug                  VARCHAR(300) UNIQUE NOT NULL,
  title                 VARCHAR(200) NOT NULL,
  subtitle              VARCHAR(400),
  excerpt               VARCHAR(500) NOT NULL,
  content               TEXT NOT NULL,           -- Markdown
  category              VARCHAR(100) NOT NULL,
  tags                  TEXT[] DEFAULT '{}',
  author_name           VARCHAR(100) NOT NULL DEFAULT 'Yannick Wolfe',
  status                VARCHAR(20) NOT NULL DEFAULT 'draft',  -- draft|published|archived
  featured              BOOLEAN NOT NULL DEFAULT false,
  og_image_url          VARCHAR(500),
  reading_time_minutes  INTEGER,
  word_count            INTEGER,
  seo_title             VARCHAR(60),
  seo_description       VARCHAR(160),
  related_protocol_slug VARCHAR(100),            -- soft FK to protocol page slug
  view_count            INTEGER NOT NULL DEFAULT 0,
  published_at          TIMESTAMP,
  created_at            TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug     ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status   ON blog_posts(status, published_at DESC)
  WHERE status = 'published';
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured)
  WHERE featured = true;

-- ── Blog views (lightweight analytics) ──────────────────────
CREATE TABLE IF NOT EXISTS blog_views (
  id          SERIAL PRIMARY KEY,
  post_slug   VARCHAR(300) NOT NULL,
  ip_hash     VARCHAR(64),          -- sha-256 of IP, not the IP itself
  viewed_at   TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blog_views_slug ON blog_views(post_slug);
