import { describe, expect, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import EpisodeList from './EpisodeList'

const episodes = [
  {
    id: 1,
    name: 'Pilot',
    air_date: 'December 2, 2013',
    episode: 'S01E01',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/35',
    ],
    url: 'https://rickandmortyapi.com/api/episode/1',
    created: '2017-11-10T12:56:33.798Z',
  },
  {
    id: 2,
    name: 'Lawnmower Dog',
    air_date: 'December 9, 2013',
    episode: 'S01E02',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/38',
    ],
    url: 'https://rickandmortyapi.com/api/episode/2',
    created: '2017-11-10T12:56:33.916Z',
  },
]

describe('EpisodeList Component Test', () => {
  it('should be rendered on the screen', () => {
    render(<EpisodeList episodes={episodes} />)
    expect(screen.getByTestId('episodelist-component')).toBeInTheDocument()
  })
})
