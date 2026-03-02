/**
 * One-time script to create the first admin user.
 * Usage: node scripts/create-admin.mjs <email> <password>
 *
 * Requires DATABASE_URL in .env.local (loaded via dotenv).
 */

import { readFileSync } from "fs";
import { createHash } from "crypto";

// Load .env.local manually (no dotenv dep needed)
try {
  const envFile = readFileSync(".env.local", "utf-8");
  for (const line of envFile.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (key && rest.length) {
      process.env[key.trim()] = rest.join("=").trim();
    }
  }
} catch {
  console.warn("No .env.local found — using existing process.env");
}

const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
  console.error("Usage: node scripts/create-admin.mjs <email> <password>");
  process.exit(1);
}

const { default: postgres } = await import("postgres");
const { hash } = await import("bcryptjs");

const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

const passwordHash = await hash(password, 12);

try {
  await sql`
    INSERT INTO admin_users (email, password_hash)
    VALUES (${email.toLowerCase()}, ${passwordHash})
    ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash
  `;
  console.log(`✓ Admin user created/updated: ${email}`);
} catch (err) {
  console.error("Failed:", err.message);
  process.exit(1);
} finally {
  await sql.end();
}
