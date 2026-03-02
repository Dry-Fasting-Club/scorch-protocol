import postgres from "postgres";

const connectionString = process.env.DATABASE_URL!;

// Neon serverless postgres client — module-level singleton
const sql = postgres(connectionString, {
  ssl: "require",
  max: 5,
});

export default sql;
