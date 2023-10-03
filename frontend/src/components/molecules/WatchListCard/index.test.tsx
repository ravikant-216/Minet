import BitCoin from '@Assets/icons/bitcoin.svg'
import { fireEvent, render, screen } from '@testing-library/react'
import WatchListCard from '.'

describe('WatchListCard', () => {
  const props = {
    image: BitCoin,
    name: 'Bitcoin',
    sign: 'BTC',
    trendValue: 8.3,
    circulatingSupply: 18.8,
    volIn24H: 2.9,
    marketCap: 64.2,
  }
  test('should render correctly', () => {
    render(<WatchListCard {...props} />)
    screen.getAllByText(props.sign)
    screen.getByText(`$${props.marketCap}T`)
    screen.getByText(`$${props.volIn24H}T`)
    screen.getByRole('checkbox', { checked: true })
  })
  test('test on watchlist add function', () => {
    const fu = jest.fn()
    render(
      <WatchListCard
        {...props}
        isAddedToWatchList={false}
        handleAddToWatchList={fu}
      />
    )
    const checkbox = screen.getByRole('checkbox', { checked: false })
    fireEvent.click(checkbox)
    expect(fu).toBeCalled()
  })
})
