import { clientConfig } from '@/const/clientConfig'
import { GetAllCharacters } from '@/types/GetAllCharacters'
import { endpoints } from '@/const/endpoints'

export async function getAllCharacters() {
  const response = await fetch(
    new URL(endpoints.getAllCharacters(), clientConfig.apiHost),
  )
  const data = await response.json()
  return data as GetAllCharacters
}
