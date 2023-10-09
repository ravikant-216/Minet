import { fireEvent, render, screen } from '@testing-library/react'
import CurrencyDetailWallet from '.'
import '@testing-library/jest-dom'
import { transactions } from '@/__mocks__'

describe('CurrencyDetailWallet', () => {
  const totalBalance = '$ 4000'
  const Render = () =>
    render(
      <CurrencyDetailWallet
        transactions={transactions}
        textAlign="left"
        totalBalance={totalBalance}
      />
    )

  test('should render', () => {
    Render()
    screen.getByText(totalBalance)
    const transaction = screen.getAllByTestId('currency-detail-wallet-card')
    expect(transaction.length).toBe(transactions.length)
  })

  test('Search should work', () => {
    Render()
    const getSearchField = screen
      .getByTestId('search-input')
      .querySelector('input')
    fireEvent.change(getSearchField!, { target: { value: 'aritra' } })
    expect(getSearchField?.value).toBe('aritra')
    expect(screen.queryByTestId('aritra')).toBeNull()
    fireEvent.change(getSearchField!, { target: { value: '' } })
    const transaction = screen.getAllByTestId('currency-detail-wallet-card')
    expect(transaction.length).toBe(transactions.length)
  })

  test('should render with right align right', () => {
    render(
      <CurrencyDetailWallet
        transactions={transactions}
        textAlign="right"
        totalBalance={totalBalance}
      />
    )
    screen.getByText(totalBalance)
  })
})
