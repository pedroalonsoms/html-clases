import { describe, expect, it } from 'vitest'
import * as db from '@/controllers/db'

describe('LocalStorageDB Test', () => {
  it('initial values are not registered', () => {
    expect(db.isFavorite(1)).toBe(false)
  })

  it('set values correctly', () => {
    db.toggleFavoriteCharacter(1)
    expect(db.isFavorite(1)).toBe(true)
  })

  it('gets values correctly', () => {
    const ids = db.getFavoriteCharacters()
    expect(ids[0]).toBe(1)
  })
})
