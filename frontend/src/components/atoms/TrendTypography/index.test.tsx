import { render, screen } from '@testing-library/react'
import TrendTypography from '.'

describe('TrendTypography', () => {
  test('Properly Render or nor for positive vale', () => {
    render(<TrendTypography value={1} />)
    screen.getByText('+1%')
  })

  test('Properly Render or not for negetive value', () => {
    render(<TrendTypography value={-1} />)
    screen.getByText('-1%')
  })
})
