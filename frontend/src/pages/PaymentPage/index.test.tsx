import { fireEvent, render, screen } from '@testing-library/react'
import { useLocation, Location, useNavigate } from 'react-router-dom'
import PaymentPage from '../PaymentPage'
import { TRANSACTION } from '@/strings/constant'
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn() as jest.MockedFunction<typeof useNavigate>,
  useLocation: jest.fn() as jest.MockedFunction<typeof useLocation>,
}))

describe('PaymentPage', () => {
  beforeEach(() => {
    ;(useLocation as jest.MockedFunction<typeof useLocation>).mockReturnValue({
      state: {
        transaction: TRANSACTION,
      },
    } as Location<unknown>)
    ;(useNavigate as jest.MockedFunction<typeof useNavigate>).mockReturnValue(
      jest.fn()
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders PaymentSuccessCard with correct props', () => {
    render(<PaymentPage />)

    const paymentSuccessCard = screen.getByTestId('payment-success-card')
    expect(paymentSuccessCard).toBeInTheDocument()
    expect(paymentSuccessCard).toHaveTextContent(TRANSACTION.crypto.symbol)
  })

  it('calls onClick when button is clicked', () => {
    render(<PaymentPage />)

    const buyCryptoButton = screen.getByRole('button', { name: 'SELL CRYPTO' })
    const goToUsdCoinButton = screen.getByRole('button', {
      name: 'GO TO USD COIN',
    })
    fireEvent.click(goToUsdCoinButton)
    expect(buyCryptoButton).toBeInTheDocument()
    expect(goToUsdCoinButton).toBeInTheDocument()
  })
  it('calls onClick when button is clicked', () => {
    ;(useLocation as jest.MockedFunction<typeof useLocation>).mockReturnValue({
      state: {
        transaction: undefined,
      },
    } as Location<unknown>)
    render(<PaymentPage />)
    expect(screen.queryByTestId('payment-success-card')).not.toBeInTheDocument()
  })
})
