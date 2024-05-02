import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Accordion test', () => {
  test('Should show title', () => {
    render(<App />)
    expect(screen.getByText(/test/i)).toBeDefined()
  })
})
