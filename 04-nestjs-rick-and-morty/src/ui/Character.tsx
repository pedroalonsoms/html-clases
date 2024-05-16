'use client'
import Image from 'next/image'
import { Character } from '@/types/Character'
import { Star } from './Star'
import { useEffect, useState } from 'react'
import * as db from '@/app/controllers/db'
import { paths } from '@/const/paths'
import Link from 'next/link'

interface CharacterComponentProps {
  character: Character
}

                        export function CharacterComponent({
  character: { id, name, image, status, gender, location },
}: CharacterComponentProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(db.isFavorite(id))
  }, [id])

  return (
    <div className='relative z-0 flex rounded-md bg-slate-700'>
      <Image
        src={image}
        alt='character'
        width={100}
        height={100}
        unoptimized
        className='h-auto rounded-l-md object-cover'
      />
      <div className='p-2'>
        <button
          className='absolute right-2 top-2'
          onClick={() => {
            db.toggleFavoriteCharacter(id)
            setIsFavorite(!isFavorite)

            if (window.location.pathname === paths.favoriteCharacters) {
              window.location.reload() // triggers a refresh only on favorite page
            }
          }}
        >
          <Star isChecked={isFavorite} />
        </button>
        <p className='text-lg'>{name}</p>
        <p className='text-sm'>
          {status} - {gender}
        </p>
        <p className='text-sm'>Location: {location.name}</p>
        <Link
          href={`${paths.character}/${id}`}
          className='mt-2 inline-block rounded-lg bg-slate-800 px-2 py-1 text-sm'
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
