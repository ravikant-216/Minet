import { fireEvent, render, screen } from '@testing-library/react'
import PaymentCardComponent from '.'

describe('PaymentCardComponent', () => {
  const handleClick = jest.fn()
  it('should render the correct buy value', () => {
    render(
      <PaymentCardComponent
        type={'buy'}
        buyValue={0.023451}
        cryptoPrice={3406069.54}
        symbol={'BTC'}
        transactionFee={1000.0}
        cryptoCoin={'bitcoin'}
        deliveryFee="0.005"
        onButtonClick={handleClick}
      />
    )
    expect(screen.getByText('You are buying')).toBeInTheDocument()
    expect(screen.getByText('1BTC = $3,406,069.54')).toBeInTheDocument()
    expect(screen.getByText('0.005 BTC')).toBeInTheDocument()
    expect(screen.getByText('$1,000.00')).toBeInTheDocument()
    const button = screen.getByText('BUY NOW')
    fireEvent.click(button)
  })

  it('should render the correct sell value', () => {
    render(
      <PaymentCardComponent
        type={'sell'}
        buyValue={0.023451}
        cryptoPrice={3406069.54}
        symbol={'BTC'}
        transactionFee={1000.0}
        cryptoCoin={'bitcoin'}
        deliveryFee="0.005"
        onButtonClick={handleClick}
      />
    )
    expect(screen.getByText('You are selling')).toBeInTheDocument()
    expect(screen.getByText('1BTC = $3,406,069.54')).toBeInTheDocument()
    expect(screen.getByText('0.005 BTC')).toBeInTheDocument()
    expect(screen.getByText('$1,000.00')).toBeInTheDocument()
    const button = screen.getByText('SELL NOW')
    fireEvent.click(button)
  })
})
