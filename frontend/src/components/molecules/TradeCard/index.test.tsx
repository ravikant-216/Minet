import { render, fireEvent } from '@testing-library/react'
import TradeCard from '.'

const mockOnClick = jest.fn()
const mockOnStarClick = jest.fn()

const defaultProps = {
  imageSrc: 'crypto-image.jpg',
  currencyName: 'Bitcoin',
  currencyCode: 'BTC',
  price: '$45,000',
  change: '+5%',
  marketCap: '$1.5T',
  checked: true,
  onCardClick: mockOnClick,
  onStarClick: mockOnStarClick,
}
describe('Trade Card', () => {
  test('renders TradeCard component with provided props', () => {
    const { getByText, getByAltText } = render(<TradeCard {...defaultProps} />)

    expect(getByAltText('crypto-symbol')).toBeInTheDocument()
    expect(getByText('Bitcoin')).toBeInTheDocument()
    expect(getByText('BTC')).toBeInTheDocument()
    expect(getByText('$45,000')).toBeInTheDocument()
    expect(getByText('+5%')).toBeInTheDocument()
    expect(getByText('$1.5T')).toBeInTheDocument()
  })

  test('calls onCardClick when the card is clicked', () => {
    const { getByText } = render(<TradeCard {...defaultProps} />)

    fireEvent.click(getByText('Bitcoin'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  test('calls onStarClick when the star icon is clicked', () => {
    const { getByAltText } = render(<TradeCard {...defaultProps} />)
    fireEvent.click(getByAltText('Checked Icon'))

    expect(mockOnStarClick).toHaveBeenCalledTimes(1)
  })

  test('renders with unchecked star icon when checked is false', () => {
    const { getByAltText } = render(
      <TradeCard {...defaultProps} checked={false} />
    )

    const starIcon = getByAltText('Unchecked icon')
    expect(starIcon).toBeInTheDocument()
  })

  test('sets the color of change text to red when change does not include "+"', () => {
    const { getByText } = render(<TradeCard {...defaultProps} change="-3%" />)

    const changeText = getByText('-3%')
    expect(changeText).toHaveStyle('color: red')
  })
})
