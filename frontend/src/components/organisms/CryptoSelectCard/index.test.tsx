import { render, fireEvent, screen } from '@testing-library/react'
import CryptoSelectCard from '.'

describe('CryptoSelectCard', () => {
  const cards = [
    { icon: 'icon1.svg', label: 'Label 1', subLabel: '$30,054.88' },
    { icon: 'icon2.svg', label: 'Label 2', subLabel: '$30,054.88' },
    { icon: 'icon3.svg', label: 'Label 3', subLabel: '$30,054.88' },
    { icon: 'icon4.svg', label: 'Label 4', subLabel: '$30,054.88' },
  ]

  it('renders without crashing', () => {
    const { getByText } = render(<CryptoSelectCard cards={cards} />)
    expect(getByText('Choose crypto')).toBeInTheDocument()
  })

  it('only one card can be selected at a time', () => {
    const handleClick = jest.fn()
    const { rerender } = render(
      <CryptoSelectCard cards={cards} onClick={handleClick} />
    )
    fireEvent.click(screen.getByText('Label 1'))
    rerender(<CryptoSelectCard cards={cards} />)
    expect(handleClick).toHaveBeenCalledWith(0)
  })
})
