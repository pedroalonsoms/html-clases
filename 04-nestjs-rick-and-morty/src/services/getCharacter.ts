import { endpoints } from '@/const/endpoints'
import { paths } from '@/const/paths'
import { GetCharacter } from '@/types/GetCharacter'

export async function getCharacter(id: number) {
  const response = await fetch(
    new URL(endpoints.getCharacter(id), paths.rickAndMortyURL),
  )
  const data = await response.json()
  return data as GetCharacter
}
