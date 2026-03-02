-- ============================================================
-- Scorch Protocol — Database Schema
-- Run once against your Neon PostgreSQL database.
-- ============================================================

-- One row per page/section
CREATE TABLE IF NOT EXISTS sections (
    slug              VARCHAR(100) PRIMARY KEY,
    title             VARCHAR(255) NOT NULL,
    paid_content_type VARCHAR(10)  CHECK (paid_content_type IN ('video', 'pdf')),
    paid_content_key  VARCHAR(500),          -- R2 object key
    price_cents       INTEGER      DEFAULT 1000,
    stripe_price_id   VARCHAR(100),
    published         BOOLEAN      DEFAULT FALSE,
    created_at        TIMESTAMPTZ  DEFAULT NOW()
);

-- Comments with admin moderation
CREATE TABLE IF NOT EXISTS comments (
    id            SERIAL PRIMARY KEY,
    section_slug  VARCHAR(100) NOT NULL REFERENCES sections(slug) ON DELETE CASCADE,
    author_name   VARCHAR(100) NOT NULL,
    body          TEXT         NOT NULL,
    status        VARCHAR(20)  DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    ip_address    VARCHAR(45),
    hcaptcha_ok   BOOLEAN      DEFAULT FALSE,
    submitted_at  TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_comments_section_status ON comments(section_slug, status);

-- One row per successful Stripe payment
CREATE TABLE IF NOT EXISTS purchases (
    id                SERIAL PRIMARY KEY,
    section_slug      VARCHAR(100) NOT NULL REFERENCES sections(slug) ON DELETE CASCADE,
    stripe_session_id VARCHAR(255) UNIQUE NOT NULL,
    amount_cents      INTEGER      NOT NULL,
    access_token      VARCHAR(64)  UNIQUE NOT NULL,
    purchased_at      TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_purchases_token ON purchases(access_token);

-- Single admin user (create via: INSERT INTO admin_users ...)
CREATE TABLE IF NOT EXISTS admin_users (
    id            SERIAL PRIMARY KEY,
    email         VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- Seed: one row per section so paid content can be configured
-- ============================================================
INSERT INTO sections (slug, title) VALUES
    ('overview',               'Overview & Principles'),
    ('decision-tree',          'Decision Logic Tree'),
    ('preparation',            'Phase 1: Preparation'),
    ('dry-fasting',            'Phase 2: The Dry Fast'),
    ('refeeding',              'Phase 3: The Refeed'),
    ('t3-therapy',             'Phase 4: T3 Therapy'),
    ('hgh-therapy',            'Phase 5: hGH Therapy'),
    ('symptom-management',     'Symptom Management'),
    ('weight-loss',            'Weight Loss Protocol'),
    ('genetic-polymorphisms',  'Genetic Polymorphisms'),
    ('tips-and-tricks',        'Tips and Tricks'),
    ('success-rate-data',      'Success Rate Data'),
    ('refeed-for-bmr',         '9-Month BMR Reconstruction'),
    ('list-of-pharmacies',     'List of Pharmacies'),
    ('random-thoughts',        'Random Thoughts'),
    ('faq',                    'FAQ Hub'),
    ('faq/general-questions',  'FAQ: General Questions'),
    ('faq/autophagy',          'FAQ: Autophagy & Fasting'),
    ('faq/refeeding',          'FAQ: Refeeding'),
    ('faq/kidneys',            'FAQ: Kidneys'),
    ('faq/liver',              'FAQ: Liver')
ON CONFLICT (slug) DO NOTHING;
