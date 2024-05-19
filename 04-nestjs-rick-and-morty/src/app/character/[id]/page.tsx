import { getCharacter } from '@/services/getCharacter'
import { getMultipleEpisodes } from '@/services/getMultipleEpisodes'
import CharacterMini from '@/ui/CharacterMini'
import EpisodeList from '@/ui/EpisodeList'

export default async function ServerPage({
  params,
}: {
  params: { id: string }
}) {
  const character = await getCharacter(parseInt(params.id))

  // parse id from urls
  const episodesIds = character.episode.map((url) => {
    const episodeId = url.split('/').pop()
    if (!episodeId) {
      throw new Error('ERROR: could not parse episode id from URL')
    }
    return parseInt(episodeId)
  })
  // do second api call
  const episodes = await getMultipleEpisodes(episodesIds)

  return (
    <div className='mx-auto max-w-screen-sm px-20 pt-10'>
      <CharacterMini character={character} />
      <EpisodeList episodes={episodes} />
    </div>
  )
}
