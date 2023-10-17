import { CryptoDetailData, RecentTransactions, WALLET } from '@/__mocks__'
import { render, screen } from '@testing-library/react'
import MyPortfolioWallet from '.'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'

describe('MyPortfolioWallet', () => {
  const props = {
    coins: CryptoDetailData,
    recentTransactions: RecentTransactions,
    wallets: WALLET,
    width: '400px',
  }
  test('RenderWithout Transactions', () => {
    render(
      <ThemeProvider theme={theme}>
        <MyPortfolioWallet {...props} recentTransactions={undefined} />
      </ThemeProvider>
    )
    screen.getByAltText('NoTransaction')
    screen.getByText('$4200')
  })
  test('RenderWith Transactions', () => {
    render(
      <ThemeProvider theme={theme}>
        <MyPortfolioWallet {...props} recentTransactions={RecentTransactions} />
      </ThemeProvider>
    )
    screen.getByText('$4200')
    expect(screen.getAllByTestId('transaction-card').length).toBe(
      RecentTransactions.length
    )
  })
})
