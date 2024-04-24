"use client";
import { getMultipleCharacters } from "@/services/getMultipleCharacters";
import { GetMultipleCharacters } from "@/types/GetMultipleCharacters";
import { CharacterComponent } from "@/ui/Character";
import { useEffect, useState } from "react";
import db from "../controllers/db";

export default function ClientPage() {
  const [favoriteCharacters, setFavoriteCharacters] = useState<
    GetMultipleCharacters | undefined
  >();

  useEffect(() => {
    const loadFavoriteCharacters = async () => {
      // Do the fetch
      const favoriteCharacters = await getMultipleCharacters(
        db.getFavoriteCharacters(),
      );
      setFavoriteCharacters(favoriteCharacters);
    };
    void loadFavoriteCharacters();
  }, []);

  if (favoriteCharacters === undefined) {
    return <div>loading...</div>;
  }

  if (favoriteCharacters.length === 0) {
    return <div>no current favorites</div>;
  }

  return (
    <>
      {favoriteCharacters.map((character) => (
        <CharacterComponent key={character.id} character={character} />
      ))}
    </>
  );
}
