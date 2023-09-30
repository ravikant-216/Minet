import { render, screen } from '@testing-library/react'
import VerticalStepper from './index'
import card from '@Assets/icons/bank-card.svg'
import wallet from '@Assets/icons/wallet.svg'

describe('Testing the VerticalStepper', () => {
  test('VerticalStepper element', () => {
    render(
      <VerticalStepper
        paymentIcon={card}
        depositIcon={wallet}
        paymentValue={'Visa credit ...8845'}
        depositValue={'Bitcoin wallet'}
        deleveryFee={'0.005 ETH'}
        paymentText={'Payment method'}
      />
    )
    const VerticalStepper_test = screen.getByTestId('transaction-stepper')
    expect(VerticalStepper_test).toBeInTheDocument()
  })
})
