import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/db/schema/*",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: "postgres://default:HrSJFWia9d5G@ep-patient-base-888553-pooler.us-east-1.postgres.vercel-storage.com/verceldb?sslmode=require",
  }
} satisfies Config;