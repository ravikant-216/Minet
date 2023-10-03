import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import RecentTransactionCard from '.'
import theme from '@/theme/index'
import {
  TRANSACTION_CARD_COIN_NAME,
  TRANSACTION_IN_CRYPTO,
  TRANSACTION_IN_DOLLAR,
  TRANSACTION_TYPE,
} from '@/strings/constant'

const mockData = {
  transactionDate: new Date(),
  cryptoName: TRANSACTION_CARD_COIN_NAME,
  transactionType: TRANSACTION_TYPE[0],
  cryptoAmount: TRANSACTION_IN_CRYPTO,
  dollarAmount: TRANSACTION_IN_DOLLAR,
}

describe('RecentTransactionCard', () => {
  it('renders with provided data', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecentTransactionCard {...mockData} />
      </ThemeProvider>
    )

    const TransactionCard = screen.getByTestId('transaction-card')
    expect(TransactionCard).toBeInTheDocument()
    expect(screen.getByText(TRANSACTION_CARD_COIN_NAME)).toBeInTheDocument()
    expect(screen.getByText(TRANSACTION_TYPE[0])).toBeInTheDocument()
    expect(screen.getByText(TRANSACTION_IN_CRYPTO)).toBeInTheDocument()
    expect(screen.getByText(TRANSACTION_IN_DOLLAR)).toBeInTheDocument()
  })
})
