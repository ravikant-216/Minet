import { CryptoDetailData, RecentTransactions } from '@/__mocks__'
import { render, screen } from '@testing-library/react'
import MyPortfolioWallet from '.'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'

describe('MyPortfolioWallet', () => {
  const props = {
    coins: CryptoDetailData,
    totalBalance: 14027,
    usdWalletBalance: 34000.0,
    width: '400px',
  }
  test('RenderWithout Transactions', () => {
    render(<MyPortfolioWallet {...props} />)
    screen.getByAltText('NoTransaction')
    screen.getByText(`$${props.totalBalance}`)
  })
  test('RenderWith Transactions', () => {
    render(
      <ThemeProvider theme={theme}>
        <MyPortfolioWallet {...props} recentTransactions={RecentTransactions} />
      </ThemeProvider>
    )
    screen.getByText(`$${props.totalBalance}`)
    expect(screen.getAllByTestId('transaction-card').length).toBe(
      RecentTransactions.length
    )
  })
})
