import { getAllCharacters } from "@/services/getAllCharacters";
import { CharacterComponent } from "@/ui/Character";

export default async function ServerPage() {
  const characters = await getAllCharacters();
  return (
    <>
      {characters.results.map((character) => (
        <CharacterComponent key={character.id} character={character} />
      ))}
    </>
  );
}
