import postgres from "postgres";

const connectionString = process.env.DATABASE_URL!;

// Neon postgres client — module-level singleton.
// idle_timeout closes idle pool connections quickly so Neon's compute endpoint
// can auto-suspend (Neon bills compute-hours for the time it is active), and
// max_lifetime caps how long any single connection is reused.
const sql = postgres(connectionString, {
  ssl: "require",
  max: 5,
  idle_timeout: 20,
  max_lifetime: 60 * 5,
});

export default sql;
