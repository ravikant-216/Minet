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
  it('it should have border when isClicked true', () => {
    const { getByTestId } = render(
      <ChipComponent
        label="Test Chip"
        textVariant="body1"
        textColor="black"
        background="white"
        padding="8px"
        borderRadius="4px"
        height="32px"
        border="1px solid gray"
        isClicked={true}
      />
    )
    const chip = getByTestId('chip')
    fireEvent.click(chip)

    expect(chip).toHaveStyle('border: 1px solid gray')
  })
})
