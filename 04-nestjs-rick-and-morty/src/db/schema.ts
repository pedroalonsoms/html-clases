import { pgTable, serial, integer, timestamp } from 'drizzle-orm/pg-core'

export const favorites = pgTable('favorites', {
  id: serial('id').primaryKey().notNull(),
  characterId: integer('character_id').notNull(),
  created: timestamp('created').defaultNow().notNull(),
})

export type FavoritesSelect = typeof favorites.$inferSelect
export type FavoritesInsert = typeof favorites.$inferInsert
