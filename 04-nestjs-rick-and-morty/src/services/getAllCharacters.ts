import { GetAllCharacters } from '@/types/GetAllCharacters'
import { endpoints } from '@/const/endpoints'
import { paths } from '@/const/paths'

export async function getAllCharacters() {
  const response = await fetch(
    new URL(endpoints.getAllCharacters(), paths.rickAndMortyURL),
  )
  const data = await response.json()
  return data as GetAllCharacters
}
