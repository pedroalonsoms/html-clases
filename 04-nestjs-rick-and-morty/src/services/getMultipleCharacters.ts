import { clientConfig } from "@/const/clientConfig";
import { endpoints } from "@/const/endpoints";
import { GetMultipleCharacters } from "@/types/GetMultipleCharacters";

export async function getMultipleCharacters(ids: number[]) {
  if (ids.length === 0) return [];
  const response = await fetch(
    new URL(endpoints.getMultipleCharacters(ids), clientConfig.apiHost),
  );
  const data = await response.json();
  return data as GetMultipleCharacters;
}
