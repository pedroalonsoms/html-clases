import { clientConfig } from "@/const/clientConfig";
import { endpoints } from "@/const/endpoints";
import { GetCharacter } from "@/types/GetCharacter";

export async function getCharacter(id: number) {
  const response = await fetch(
    new URL(endpoints.getCharacter(id), clientConfig.apiHost),
  );
  const data = await response.json();
  return data as GetCharacter;
}
