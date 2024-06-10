'use server'

import { auth } from '@/auth'
import { db } from '@/db'
import { favorites } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getFavoriteCharactersIds() {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) throw new Error('User must be authenticated')

  const favoriteCharacters = await db
    .select({ characterId: favorites.characterId })
    .from(favorites)
    .where(eq(favorites.userId, userId))

  return favoriteCharacters.map(
    (favoriteCharacter) => favoriteCharacter.characterId,
  )
}
