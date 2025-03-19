import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  tablesFilter: ["drive_*"],
  dbCredentials: {
   

    user: env.user_singlestore,
    host: env.host_singlestore,
    port: parseInt(env.port_singlestore),
    password: env.password_singlestore,
    database: env.database_singlestore,
    ssl: {},
    
  },
} satisfies Config;