import { describe, expect, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import { Star } from './Star'

describe('Star Component Test', () => {
  it('should be rendered on the screen', () => {
    render(<Star isChecked={false} />)
    expect(screen.getByTestId('star-component')).toBeInTheDocument()
  })
})
