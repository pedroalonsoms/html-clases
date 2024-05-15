import { getCharacter } from '@/services/getCharacter'
import { getMultipleEpisodes } from '@/services/getMultipleEpisodes'
import Image from 'next/image'

export default async function ServerPage({
  params,
}: {
  params: { id: string }
}) {
  const character = await getCharacter(parseInt(params.id))

  // parse id from urls
  const episodesIds = character.episode.map((url) =>
    parseInt(url.split('/').pop()!),
  )
  // do second api call
  const episodes = await getMultipleEpisodes(episodesIds)

  return (
    <div className='mx-auto max-w-screen-sm px-20 pt-10'>
      <div className='flex gap-10'>
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
      <ul className='pt-10'>
        <span className='text-xl font-bold'>Episodes: </span>
        {episodes.map((episode) => (
          <li className='pt-2 text-sm' key={episode.id}>
            • <span>{episode.episode} / </span>
            <span>{episode.name} / </span>
            <span>{episode.air_date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
