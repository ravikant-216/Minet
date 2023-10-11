import { getAllTransactionsByCryptoId } from '@/api/api'
import theme from '@/theme/index'
import { ThemeProvider } from '@emotion/react'
import { fireEvent, render, screen } from '@testing-library/react'
import DetailPage from './index'

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

jest.mock('@/api/api')

describe('DetailPage', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    ;(getAllTransactionsByCryptoId as jest.Mock).mockResolvedValue({
      data: [
        {
          id: '6f2b8e3f-9d3b-4f1d-9d8c-3e3e3e3e3e2e',
          date: '2023-07-29T02:35:42',
          status: 'SUCCESS',
          type: 'SELL',
          price: 3234,
          quantity: 0.032343,
          description: 'From Teja Minnikanti',
          user: {
            id: 'b62177be-aca1-45d3-ab0e-60a9f4c79a5e',
            name: 'John Doe',
            email: 'john@gmail.com',
            password: 'JohnDoe@001',
            balance: 34000,
          },
          crypto: {
            id: '7590808b-044e-4140-b34b-9466cdc15cca',
            name: 'Bitcoin',
            symbol: 'BTC',
            icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            price: 3285553.73,
            change: 1.06,
            marketCap: 60.1,
            volume: 2.9,
            circulatingSupply: 18.8,
          },
        },
      ],
    })
  })

  const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
  }

  it('renders the WatchListCard component', async () => {
    renderWithTheme(
      <DetailPage
        cryptoId={'7590808b-044e-4140-b34b-9466cdc15cca'}
        userId="b62177be-aca1-45d3-ab0e-60a9f4c79a5e"
      />
    )
    const component = await screen.findByTestId('watchlist-card')
    expect(component).toBeInTheDocument()
    fireEvent.click(screen.getByText('Watchlist'))
    expect(screen.getByText('Total balance')).toBeInTheDocument()
  })
})
