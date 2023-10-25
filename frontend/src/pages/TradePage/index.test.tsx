/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TABS } from '@/strings/constant'
import TradePage from '.'
import { user } from '@/__mocks__'
import {
  addWatchlist,
  deleteWatchlistById,
  getAllCoins,
  getWatchlistDataByUserId,
} from '@/api/api'
import { act } from 'react-dom/test-utils'
import * as Router from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import * as authContext from '@/context/AuthContext'

jest.mock('@/api/api')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}))
describe('TradePage', () => {
  const navigateMock = jest.fn()
  beforeEach(() => {
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateMock)
    jest.resetAllMocks()
    ;(getAllCoins as jest.Mock).mockResolvedValue({
      data: [
        {
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
        {
          id: 'f2b8e3f-9d3b-4f1d-9d8c-3e3e3e3e3e2e',
          name: 'Ethereum',
          symbol: 'ETH',
          icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
          price: 223456.78,
          change: -0.23,
          marketCap: 25.6,
          volume: 1.2,
          circulatingSupply: 11.7,
        },
      ],
    })
    ;(getWatchlistDataByUserId as jest.Mock).mockResolvedValue({
      data: [
        {
          id: 'b62177be-aca1-45d3-ab0e-60a9f4t59a5e',
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
    ;(addWatchlist as jest.Mock).mockResolvedValue({})
    ;(deleteWatchlistById as jest.Mock).mockResolvedValue({})
    jest.spyOn(authContext, 'useAuthContext').mockReturnValue({
      user: user,
    } as any)
  })

  test('should render the component with the trade table data and watch list data', async () => {
    render(
      <BrowserRouter>
        <TradePage />
      </BrowserRouter>
    )
    await waitFor(() => expect(getAllCoins).toHaveBeenCalledTimes(1))
    await waitFor(() =>
      expect(getWatchlistDataByUserId).toHaveBeenCalledWith(user.id)
    )
    expect(screen.getByTestId('search-trade-table')).toBeInTheDocument()
  })

  test('should handle star icon click to add or remove watch list item', async () => {
    render(
      <BrowserRouter>
        <TradePage />
      </BrowserRouter>
    )
    await waitFor(() => expect(getAllCoins).toHaveBeenCalledTimes(1))
    await waitFor(() =>
      expect(getWatchlistDataByUserId).toHaveBeenCalledWith(user.id)
    )
    expect(screen.getByTestId('search-trade-table')).toBeInTheDocument()
    const tradeTable = screen.getByTestId('Trade-table')
    expect(screen.getByTestId('searchField')).toBeInTheDocument()
    expect(screen.getByTestId('dropdown-1')).toBeInTheDocument()
    expect(tradeTable).toBeInTheDocument()
    const tab1 = screen.getByText(TABS[0].value)
    const tab2 = screen.getByText(TABS[1].value)
    expect(tab1).toBeInTheDocument()
    expect(tab2).toBeInTheDocument()
    const uncheckedIcon = screen.getAllByAltText('Unchecked icon')[0]
    const checkedIcon = screen.getAllByAltText('Checked Icon')[0]
    expect(checkedIcon).toBeInTheDocument()
    expect(uncheckedIcon).toBeInTheDocument()
    act(() => {
      userEvent.click(uncheckedIcon)
    })
    await waitFor(() => expect(addWatchlist).toBeCalled())
    act(() => {
      userEvent.click(checkedIcon)
    })
    await waitFor(() =>
      expect(deleteWatchlistById).toHaveBeenCalledWith(
        'b62177be-aca1-45d3-ab0e-60a9f4t59a5e'
      )
    )
    expect(screen.getByText('Ethereum')).toBeInTheDocument()
    expect(screen.getByText('ETH')).toBeInTheDocument()
    const tradeTable1 = screen.getByTestId('Trade-table')
    expect(screen.getByTestId('searchField')).toBeInTheDocument()
    expect(screen.getByTestId('dropdown-1')).toBeInTheDocument()
    expect(tradeTable1).toBeInTheDocument()
    fireEvent.click(screen.getByText('Bitcoin'))
    expect(screen.getByText('Name')).toBeInTheDocument()
  })
})
