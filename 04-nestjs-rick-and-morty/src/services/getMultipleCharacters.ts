import { endpoints } from '@/const/endpoints'
import { paths } from '@/const/paths'
import { GetMultipleCharacters } from '@/types/GetMultipleCharacters'

export async function getMultipleCharacters(ids: number[]) {
  if (ids.length === 0) return []
  const response = await fetch(
    new URL(endpoints.getMultipleCharacters(ids), paths.rickAndMortyURL),
  )
  const data = await response.json()
  return data as GetMultipleCharacters
}
