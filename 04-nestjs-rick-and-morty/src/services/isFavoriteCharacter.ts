'use server'

import { auth } from '@/auth'
import { db } from '@/db'
import { favorites } from '@/db/schema'
import { eq, and } from 'drizzle-orm'

export async function isFavoriteCharacter(characterId: number) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) throw new Error('User must be authenticated')

  const res = await db
    .select()
    .from(favorites)
    .where(
      and(eq(favorites.characterId, characterId), eq(favorites.userId, userId)),
    )

  return res.length === 1
}
