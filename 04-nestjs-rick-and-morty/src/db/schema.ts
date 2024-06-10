import { pgTable, serial, integer, varchar, uuid } from 'drizzle-orm/pg-core'

export const user = pgTable(
  '_user', //had to rename it because the word 'user' is reserved in postgres
  {
    id: uuid('id').defaultRandom().primaryKey(),
    email: varchar('email', { length: 64 }).notNull().unique(),
    password: varchar('password', { length: 256 }).notNull(),
  },
)

export type UserSelect = typeof user.$inferSelect
export type UserInsert = typeof user.$inferInsert

export const favorites = pgTable('favorites', {
  id: serial('id').primaryKey().notNull(),
  userId: uuid('user_id')
    .references(() => user.id, { onDelete: 'cascade' })
    .notNull(),
  characterId: integer('character_id').notNull(),
})

export type FavoritesSelect = typeof favorites.$inferSelect
export type FavoritesInsert = typeof favorites.$inferInsert
