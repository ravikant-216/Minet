/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from '@testing-library/react'
import DashBoardPage from '.'
import {
  CryptoDetailData,
  RecentTransactions,
  WatchListItems,
  user,
} from '@/__mocks__'
import coinService from '@/service/coin.service'
import transactionService from '@/service/transaction.service'
import watchListService from '@/service/watchList.service'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import { act } from 'react-dom/test-utils'
import { CLICK_ONCURRENCY } from '@/strings/constant'

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

jest.mock('@/service/coin.service')
jest.mock('@/service/watchList.service')
jest.mock('@/service/transaction.service')

describe('DashBoardPage', () => {
  const fetchAllCoins = jest.spyOn(coinService, 'fetchAllCoins')

  fetchAllCoins.mockReturnValue(Promise.resolve(CryptoDetailData))

  const fetchAllTransaction = jest.spyOn(
    transactionService,
    'fetchAllTransaction'
  )

  fetchAllTransaction.mockReturnValue(Promise.resolve(RecentTransactions))

  const getDashBoardWatchList = jest.spyOn(
    watchListService,
    'getDashBoardWatchList'
  )
  getDashBoardWatchList.mockReturnValue(Promise.resolve(WatchListItems))

  test('Check render working or not if new User', async () => {
    act(() => {
      render(
        <ThemeProvider theme={theme}>
          <DashBoardPage user={user} />
        </ThemeProvider>
      )
    })

    await waitFor(() => {
      screen.getAllByText('Watchlist')
      screen.getByText(CLICK_ONCURRENCY)
      expect(fetchAllTransaction).toBeCalled()
      expect(fetchAllTransaction).toBeCalled()
      expect(getDashBoardWatchList).toBeCalled()
    })
  })

  test('Check render working   if new User', async () => {
    act(() => {
      render(
        <ThemeProvider theme={theme}>
          <DashBoardPage user={{ ...user, isNewUser: true }} />
        </ThemeProvider>
      )
    })

    await waitFor(() => {
      screen.getAllByText('Watchlist')
      expect(screen.queryByText(CLICK_ONCURRENCY)).toBeNull()
      expect(fetchAllTransaction).toBeCalled()
      expect(fetchAllTransaction).toBeCalled()
      expect(getDashBoardWatchList).toBeCalled()
    })
  })

  test('Check api return undefined it will work fine', async () => {
    const fetchAllCoins = jest.spyOn(coinService, 'fetchAllCoins')

    fetchAllCoins.mockReturnValue(Promise.resolve(CryptoDetailData))

    const fetchAllTransaction = jest.spyOn(
      transactionService,
      'fetchAllTransaction'
    )

    fetchAllTransaction.mockReturnValue(Promise.resolve(undefined))

    const getDashBoardWatchList = jest.spyOn(
      watchListService,
      'getDashBoardWatchList'
    )
    getDashBoardWatchList.mockReturnValue(Promise.resolve(undefined))

    act(() => {
      render(
        <ThemeProvider theme={theme}>
          <DashBoardPage user={{ ...user, isNewUser: true }} />
        </ThemeProvider>
      )
    })

    await waitFor(() => {
      screen.getAllByText('Watchlist')
      expect(screen.queryByText(CLICK_ONCURRENCY)).toBeNull()
      expect(fetchAllTransaction).toBeCalled()
      expect(fetchAllTransaction).toBeCalled()
      expect(getDashBoardWatchList).toBeCalled()
    })
  })
})
