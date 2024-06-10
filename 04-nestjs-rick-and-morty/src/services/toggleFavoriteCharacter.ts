'use server'

import { auth } from '@/auth'
import { db } from '@/db'
import { favorites } from '@/db/schema'
import { eq, and } from 'drizzle-orm'
import { isFavoriteCharacter } from './isFavoriteCharacter'

export async function toggleFavoriteCharacter(characterId: number) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) throw new Error('User must be authenticated')

  const isFavorite = await isFavoriteCharacter(characterId)

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
