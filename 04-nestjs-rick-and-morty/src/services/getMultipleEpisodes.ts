import { endpoints } from '@/const/endpoints'
import { paths } from '@/const/paths'
import { GetMultipleEpisodes } from '@/types/GetMultipleEpisodes'

export async function getMultipleEpisodes(ids: number[]) {
  if (ids.length === 0) return []
  const response = await fetch(
    new URL(endpoints.getMultipleEpisodes(ids), paths.rickAndMortyURL),
  )
  const data = await response.json()
  return data as GetMultipleEpisodes
}
