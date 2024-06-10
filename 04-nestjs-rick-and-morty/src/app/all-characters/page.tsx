import { getAllCharacters } from '@/services/getAllCharacters'
import { CharacterComponent } from '@/ui/Character'

export const dynamic = 'force-dynamic'

export default async function ServerPage() {
  const characters = await getAllCharacters()
  return (
    <div className='mx-auto grid max-w-screen-lg grid-cols-1 gap-10 px-10 pt-10 sm:grid-cols-2 lg:grid-cols-3'>
      {characters.results.map((character) => (
        <CharacterComponent key={character.id} character={character} />
      ))}
    </div>
  )
}
