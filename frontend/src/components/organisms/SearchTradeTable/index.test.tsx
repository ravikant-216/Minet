import { render, fireEvent, screen } from '@testing-library/react'
import SearchTradeTable from '.'
import { TABS, TRADE_DATA } from '@/strings/constant'

describe('Search Trade Table', () => {
  const cardClick = jest.fn()
  const starIconClick = jest.fn()
  beforeEach(() => {
    render(
      <SearchTradeTable
        tradeTableData={TRADE_DATA}
        watchListData={TRADE_DATA.filter((t) => t.checked)}
        onCardClick={cardClick}
        onStarIconClick={starIconClick}
      />
    )
  })
  it('renders without crashing and contains expected elements', () => {
    const tradeTable = screen.getByTestId('Trade-table')
    expect(screen.getByTestId('searchField')).toBeInTheDocument()
    expect(screen.getByTestId('dropdown-1')).toBeInTheDocument()
    expect(tradeTable).toBeInTheDocument()

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Price')).toBeInTheDocument()
    expect(screen.getByText('Change')).toBeInTheDocument()
    expect(screen.getByText('Watch')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Bitcoin'))
    expect(cardClick).toHaveBeenCalledTimes(1)
  })

  it('handles tab change correctly', () => {
    const tab1 = screen.getByText(TABS[0].value)
    const tab2 = screen.getByText(TABS[1].value)
    expect(tab1).toBeInTheDocument()
    expect(tab2).toBeInTheDocument()
    const uncheckedIcon = screen.getAllByAltText('Unchecked icon')[0]
    const checkedIcon = screen.getAllByAltText('Checked Icon')[0]
    expect(checkedIcon).toBeInTheDocument()
    expect(uncheckedIcon).toBeInTheDocument()
    fireEvent.click(tab2)
    expect(checkedIcon).toBeInTheDocument()
    expect(uncheckedIcon).not.toBeInTheDocument()
  })

  it('handles search functionality correctly', () => {
    const searchField = screen.getByPlaceholderText('Search all assets')
    fireEvent.change(searchField, { target: { value: 'Cardano' } })
    expect(screen.getByTestId('watchlistIcon_Cardano')).toBeInTheDocument()
    const crossIcon = screen.getByAltText('Search Icon')
    fireEvent.click(crossIcon)
    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
  })

  it('checks WatchList data onclick', () => {
    const uncheckedIcon = screen.getAllByAltText('Unchecked icon')[0]
    const checkedIcon = screen.getAllByAltText('Checked Icon')[1]
    expect(uncheckedIcon).toBeInTheDocument()
    fireEvent.click(uncheckedIcon)
    const tab2 = screen.getByText('Watchlist')
    fireEvent.click(tab2)
    expect(starIconClick).toHaveBeenCalledTimes(1)

    fireEvent.click(checkedIcon)
    expect(starIconClick).toHaveBeenCalledTimes(2)
  })
  it('handles search functionality along with tab change correctly', () => {
    const searchField = screen.getByPlaceholderText('Search all assets')
    fireEvent.change(searchField, { target: { value: 'Bi' } })
    const bitcoin = screen.getByTestId('watchlistIcon_Bitcoin')
    const bitcoinCoin = screen.getByTestId('watchlistIcon_Bitcoin Coin')
    const binance = screen.getByTestId('watchlistIcon_Binance')
    expect(bitcoin).toBeInTheDocument()
    expect(bitcoinCoin).toBeInTheDocument()
    expect(binance).toBeInTheDocument()

    const tab2 = screen.getByText(TABS[1].value)
    fireEvent.click(tab2)
    expect(bitcoin).toBeInTheDocument()
    expect(bitcoinCoin).toBeInTheDocument()
    expect(binance).not.toBeInTheDocument()
    fireEvent.change(searchField, { target: { value: 'Bit' } })
    fireEvent.click(screen.getByText(TABS[0].value))
    expect(bitcoin).toBeInTheDocument()
    expect(bitcoinCoin).toBeInTheDocument()
    expect(binance).not.toBeInTheDocument()
  })
  it('filters assets by name and checked status', () => {
    const searchText = 'Bitcoin'
    fireEvent.change(screen.getByPlaceholderText('Search all assets'), {
      target: { value: searchText },
    })
    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()

    fireEvent.click(screen.getByText(TABS[1].value))

    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()

    fireEvent.click(screen.getByText(TABS[0].value))

    fireEvent.change(screen.getByPlaceholderText('Search all assets'), {
      target: { value: '' },
    })

    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()

    fireEvent.click(screen.getByText(TABS[1].value))

    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()
  })
  it('filters watchlist by name and checked status', () => {
    const searchText = 'Bitcoin'
    fireEvent.click(screen.getByText(TABS[1].value))
    fireEvent.change(screen.getByPlaceholderText('Search all assets'), {
      target: { value: searchText },
    })
    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()

    fireEvent.click(screen.getByText(TABS[0].value))

    fireEvent.change(screen.getByPlaceholderText('Search all assets'), {
      target: { value: '' },
    })

    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()

    fireEvent.click(screen.getByText(TABS[1].value))

    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()
  })
  it('filters watchlist by name and checked status', () => {
    const searchText = 'Bitcoin'
    fireEvent.click(screen.getByText(TABS[1].value))
    fireEvent.change(screen.getByPlaceholderText('Search all assets'), {
      target: { value: searchText },
    })
    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()

    fireEvent.click(screen.getByText(TABS[0].value))

    fireEvent.change(screen.getByPlaceholderText('Search all assets'), {
      target: { value: '' },
    })

    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()

    fireEvent.click(screen.getByText(TABS[1].value))

    expect(screen.getByTestId('watchlistIcon_Bitcoin')).toBeInTheDocument()
    expect(screen.getByTestId('watchlistIcon_Bitcoin Coin')).toBeInTheDocument()
  })
})
