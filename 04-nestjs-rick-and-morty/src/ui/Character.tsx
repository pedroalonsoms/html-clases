"use client";
import Image from "next/image";
import { Character } from "@/types/Character";
import { Star } from "./Star";
import { useEffect, useState } from "react";
import db from "@/app/controllers/db";
import { useRouter } from "next/navigation";
import { paths } from "@/const/paths";

interface CharacterComponentProps {
  character: Character;
}

export function CharacterComponent({
  character: { id, name, image, status, gender, location },
}: CharacterComponentProps) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(db.isFavorite(id));
  }, [id]);

  return (
    <div className="relative z-0 flex rounded-md bg-slate-700">
      <Image
        src={image}
        alt="character"
        width={100}
        height={100}
        unoptimized
        className="h-auto rounded-l-md"
      />
      <div className="flex flex-col p-2 text-xs">
        <button
          className="absolute right-2 top-2"
          onClick={(e) => {
            db.toggleFavoriteCharacter(id);
            setIsFavorite(!isFavorite);

            if (window.location.pathname === paths.favoriteCharacters) {
              window.location.reload(); // triggers a refresh only on favorite page
            }
          }}
        >
          <Star isChecked={isFavorite} />
        </button>
        <span className="text-lg">{name}</span>
        <span>
          {status} - {gender}
        </span>
        <span>Location: {location.name}</span>
      </div>
    </div>
  );
}
