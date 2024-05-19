import { expect, it, describe } from 'vitest'
import { screen, render } from '@testing-library/react'
import { CharacterComponent } from './Character'
import { Character } from '@/types/Character'

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: 'Test type',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    'https://rickandmortyapi.com/api/episode/3',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
}

describe('Character Component Test', () => {
  it('should be rendered on the screen', () => {
    render(<CharacterComponent character={mockCharacter} />)
    expect(screen.getByTestId('character-component')).toBeInTheDocument()
  })
})
