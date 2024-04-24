import { Character } from "./Character";

export interface GetAllCharacters {
    info: {
      count: number,
      pages: number,
      next: string | null,
      prev: string | null,
    },
    results: Character[]
  }
  