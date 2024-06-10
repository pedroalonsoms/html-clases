'use server'

import { auth } from '@/auth'
import { db } from '@/db'
import { favorites } from '@/db/schema'
import { eq, and } from 'drizzle-orm'

export async function toggleFavoriteCharacter(characterId: number) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) throw new Error('User must be authenticated')

  const res = await db
    .select()
    .from(favorites)
    .where(
      and(eq(favorites.characterId, characterId), eq(favorites.userId, userId)),
    )

  const isFavorite = res.length === 1

  if (isFavorite) {
    await db
      .delete(favorites)
      .where(
        and(
          eq(favorites.characterId, characterId),
          eq(favorites.userId, userId),
        ),
      )
  } else {
    await db.insert(favorites).values({ characterId, userId })
  }
}
