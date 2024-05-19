import { Character } from '@/types/Character'
import Image from 'next/image'

export default function CharacterMini({ character }: { character: Character }) {
  return (
    <div data-testid='charactermini-component' className='flex gap-10'>
      <Image
        src={character.image}
        alt='character'
        width={200}
        height={200}
        unoptimized
        className='h-auto rounded-md'
      />
      <div className='font-light'>
        <p className='text-xl font-medium'>{character.name}</p>
        <p className='text-lg'>
          {character.status} - {character.gender}
        </p>
        <p>
          <span className='font-bold'>Origin: </span>
          {character.origin.name}
        </p>
        <p>
          <span className='font-bold'>Location: </span>
          {character.location.name}
        </p>
      </div>
    </div>
  )
}
