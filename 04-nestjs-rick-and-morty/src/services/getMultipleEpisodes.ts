import { clientConfig } from "@/const/clientConfig";
import { endpoints } from "@/const/endpoints";
import { GetMultipleEpisodes } from "@/types/GetMultipleEpisodes";

export async function getMultipleEpisodes(ids: number[]) {
  if (ids.length === 0) return [];
  const response = await fetch(
    new URL(endpoints.getMultipleEpisodes(ids), clientConfig.apiHost),
  );
  const data = await response.json();
  return data as GetMultipleEpisodes;
}
