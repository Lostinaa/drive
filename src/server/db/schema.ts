import { int, text, singlestoreTable } from "drizzle-orm/singlestore-core";

export const users = singlestoreTable("users_table", {
  id: int("id").primaryKey().autoincrement(), // Changed from bigint to int
  name: text("name"),
  age: int("age"),
});