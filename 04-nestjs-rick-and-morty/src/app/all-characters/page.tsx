import { paths } from "@/const/paths";
import { getAllCharacters } from "@/services/getAllCharacters";
import { CharacterComponent } from "@/ui/Character";
import Link from "next/link";

export default async function ServerPage() {
  const characters = await getAllCharacters();
  return (
    <>
      {characters.results.map((character) => {
        <CharacterComponent character={character} />;
      })}
    </>
  );
}
