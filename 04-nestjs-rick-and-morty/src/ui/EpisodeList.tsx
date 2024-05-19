import { Episode } from '@/types/Episode'

export default function EpisodeList({ episodes }: { episodes: Episode[] }) {
  return (
    <ul data-testid='episodelist-component' className='pt-10'>
      <span className='text-xl font-bold'>Episodes: </span>
      {episodes.map((episode) => (
        <li className='pt-2 text-sm' key={episode.id}>
          • <span>{episode.episode} / </span>
          <span>{episode.name} / </span>
          <span>{episode.air_date}</span>
        </li>
      ))}
    </ul>
  )
}
