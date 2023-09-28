import { render, screen } from '@testing-library/react'
import StarCheckBox from '.'

describe('StarCheckBox', () => {
  test('checking checked ', () => {
    render(<StarCheckBox checked />)
    screen.getByRole('checkbox', { checked: true })
  })

  test('checking UnChecked ', () => {
    render(<StarCheckBox />)
    screen.getByRole('checkbox', { checked: false })
  })
})
