const FAVORITE_CHARACTERS_KEY = 'FAVORITE_CHARACTERS_KEY'

export function getFavoriteCharacters() {
  // Getting the state from local storage
  const savedState = localStorage.getItem(FAVORITE_CHARACTERS_KEY)

  // Parsing the state
  return (
    savedState === '' || savedState === null ? [] : JSON.parse(savedState)
  ) as number[]
}

export function isFavorite(id: number) {
  const favoriteCharacters = getFavoriteCharacters()
  return favoriteCharacters.includes(id)
}

export function toggleFavoriteCharacter(id: number) {
  const favoriteCharacters = getFavoriteCharacters()
  if (isFavorite(id)) {
    // removes it
    favoriteCharacters.splice(favoriteCharacters.indexOf(id), 1)
  } else {
    // adds it
    favoriteCharacters.push(id)
  }

  localStorage.setItem(
    FAVORITE_CHARACTERS_KEY,
    JSON.stringify(favoriteCharacters),
  ) // Save as an array stringified
}
