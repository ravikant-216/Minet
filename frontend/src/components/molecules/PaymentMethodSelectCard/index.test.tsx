import { render, screen } from '@testing-library/react'
import PaymentMethodSelectCard from '.'
import { PaymentOptions } from '@/strings/constant'

describe('PaymentMethodSelectCard', () => {
  test('renders PaymentMethodSelectCard component', () => {
    render(<PaymentMethodSelectCard paymentOptions={PaymentOptions} />)
    screen.getByText(PaymentOptions[0].name)
    screen.getByText(`Total Balance - ${PaymentOptions[0].balance}`)
    screen.getByText(PaymentOptions[0].type)
  })
})
