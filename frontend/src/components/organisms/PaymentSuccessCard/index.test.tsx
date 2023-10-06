import React from 'react'
import { render, screen } from '@testing-library/react'
import PaymentSuccessCard from '.'

describe('PaymentSuccessCard', () => {
  it('renders the component with sell transaction', () => {
    render(
      <PaymentSuccessCard
        isSell={true}
        coinAmount={10.5}
        coinCode="BTC"
        onClick={() => {}}
      />
    )
    const successImage = screen.getByAltText('payment-success')
    const coinAmount = screen.getByText('10.5 BTC')
    const transactionMessage = screen.getByText(
      'Sell is completed, please check your balance in your Rupee coin'
    )
    const sellCryptoButton = screen.getByRole('button', { name: 'SELL CRYPTO' })
    const goToUsdCoinButton = screen.getByRole('button', {
      name: 'GO TO USD COIN',
    })

    expect(successImage).toBeInTheDocument()
    expect(coinAmount).toBeInTheDocument()
    expect(transactionMessage).toBeInTheDocument()
    expect(sellCryptoButton).toBeInTheDocument()
    expect(goToUsdCoinButton).toBeInTheDocument()
  })

  it('renders the component with purchase transaction', () => {
    render(
      <PaymentSuccessCard
        isSell={false}
        coinAmount={5.8}
        coinCode="ETH"
        onClick={() => {}}
      />
    )

    const successImage = screen.getByAltText('payment-success')
    const coinAmount = screen.getByText('5.8 ETH')
    const transactionMessage = screen.getByText(
      'Purchase is completed, please check your balance in your crypto wallet'
    )
    const buyCryptoButton = screen.getByRole('button', { name: 'BUY CRYPTO' })
    const goToUsdCoinButton = screen.getByRole('button', {
      name: 'GO TO USD COIN',
    })

    expect(successImage).toBeInTheDocument()
    expect(coinAmount).toBeInTheDocument()
    expect(transactionMessage).toBeInTheDocument()
    expect(buyCryptoButton).toBeInTheDocument()
    expect(goToUsdCoinButton).toBeInTheDocument()
  })
})
