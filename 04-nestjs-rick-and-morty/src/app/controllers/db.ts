const FAVORITE_CHARACTERS_KEY = 'FAVORITE_CHARACTERS_KEY'

export default abstract class db {
  public static getFavoriteCharacters() {
    // Getting the state from local storage
    const savedState = localStorage.getItem(FAVORITE_CHARACTERS_KEY)

    // Parsing the state
    return (
      savedState === '' || savedState === null ? [] : JSON.parse(savedState)
    ) as number[]
  }

  public static isFavorite(id: number) {
    const favoriteCharacters = this.getFavoriteCharacters()
    return favoriteCharacters.includes(id)
  }

  public static toggleFavoriteCharacter(id: number) {
    const favoriteCharacters = this.getFavoriteCharacters()
    if (this.isFavorite(id)) {
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
}
