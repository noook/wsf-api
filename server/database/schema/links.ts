import { pgTable, text } from "drizzle-orm/pg-core";

// Important: export the variable so that it can be detected by drizzle, and imported in the app.
export const links = pgTable('links', {
  slug: text().primaryKey(),
  url: text().notNull(),
  title: text().notNull(),
})