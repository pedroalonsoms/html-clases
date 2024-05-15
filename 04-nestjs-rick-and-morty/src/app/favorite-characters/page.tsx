'use client'
import { getMultipleCharacters } from '@/services/getMultipleCharacters'
import { GetMultipleCharacters } from '@/types/GetMultipleCharacters'
import { CharacterComponent } from '@/ui/Character'
import { useEffect, useState } from 'react'
import db from '../controllers/db'

export default function ClientPage() {
  const [favoriteCharacters, setFavoriteCharacters] = useState<
    GetMultipleCharacters | undefined
  >()

  useEffect(() => {
    const loadFavoriteCharacters = async () => {
      // Do the fetch
      const favoriteCharacters = await getMultipleCharacters(
        db.getFavoriteCharacters(),
      )
      setFavoriteCharacters(favoriteCharacters)
    }
    void loadFavoriteCharacters()
  }, [])

  if (favoriteCharacters === undefined) {
    return <div className='grid place-items-center pt-10'>loading...</div>
  }

  if (favoriteCharacters.length === 0) {
    return (
      <div className='grid place-items-center pt-10'>no current favorites</div>
    )
  }

  return (
    <div className='mx-auto grid max-w-screen-lg grid-cols-1 gap-10 px-10 pt-10 sm:grid-cols-2 lg:grid-cols-3'>
      {favoriteCharacters.map((character) => (
        <CharacterComponent key={character.id} character={character} />
      ))}
    </div>
  )
}
