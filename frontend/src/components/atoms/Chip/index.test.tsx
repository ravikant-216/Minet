import { render, screen, fireEvent } from '@testing-library/react'
import ChipComponent from './index'

describe('Testing the ChipComponent', () => {
  test('ChipComponent element', () => {
    render(
      <ChipComponent
        label="New"
        textVariant={undefined}
        textColor={''}
        background={''}
        padding={''}
        borderRadius={''}
        height={''}
      />
    )
    const Chip = screen.getByTestId('chip')
    expect(Chip).toBeInTheDocument()
    fireEvent.click(Chip)
  })
})
