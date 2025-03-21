
import { drizzle } from "drizzle-orm/singlestore";
import { createPool, type Pool } from "mysql2/promise";
import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

const conn = 
globalForDb.conn ??
createPool({
  user: env.user_singlestore,
  host: env.host_singlestore,
  port: parseInt(env.port_singlestore),
  password: env.password_singlestore,
  database: env.database_singlestore,
  ssl: {},
  maxIdle: 0,



});


if (env.NODE_ENV !== "production") globalForDb.conn = conn;

conn.addListener("error", (err) => {
  console.error("Database connection error:", err);
});

export const db = drizzle(conn, { schema });