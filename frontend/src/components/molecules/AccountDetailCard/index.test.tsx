import { render, fireEvent } from '@testing-library/react'
import AccountDetailCard from '.'
import { USD } from '@/strings/constant'

describe('AccountDetailCard', () => {
  const defaultProps = {
    isBuy: true,
    crypto: 'Bitcoin',
    label: 'Available Balance',
    sliderValue: '50',
    userBalance: '$5,000',
    sliderMaxValue: 100,
    onClick: jest.fn(),
    onSliderChange: jest.fn(),
  }

  it('renders with default props', () => {
    const { getByText } = render(<AccountDetailCard {...defaultProps} />)

    expect(getByText('Bitcoin')).toBeInTheDocument()
    expect(getByText('Available Balance')).toBeInTheDocument()
    expect(getByText('$5,000')).toBeInTheDocument()
  })

  it('renders component correctly with isBuy false', () => {
    const sellFun = jest.fn()
    const { getByText } = render(
      <AccountDetailCard
        isBuy={false}
        crypto={defaultProps.crypto}
        userBalance={defaultProps.userBalance}
        label={USD}
        sliderMaxValue={defaultProps.sliderMaxValue}
        sliderValue={'1BTC = $3,406,069.54'}
        onClick={sellFun}
        onSliderChange={defaultProps.onSliderChange}
      />
    )

    expect(getByText('Bitcoin')).toBeInTheDocument()
    expect(getByText('1BTC = $3,406,069.54')).toBeInTheDocument()
    expect(getByText('$5,000')).toBeInTheDocument()
    const button = getByText('Sell max')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(sellFun).toHaveBeenCalledTimes(1)
  })

  it('calls onClick when the button is clicked', () => {
    const { getByText } = render(<AccountDetailCard {...defaultProps} />)
    const button = getByText('Buy max')

    fireEvent.click(button)

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
  })

  it('calls onSliderChange when the slider value changes', () => {
    const { getByRole } = render(<AccountDetailCard {...defaultProps} />)
    const slider = getByRole('slider')

    fireEvent.change(slider, { target: { value: 75 } })

    expect(defaultProps.onSliderChange).toHaveBeenCalledWith(75)
  })
})
