/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import DashBoardPage from '.'
import {
  CryptoDetailData,
  RecentTransactions,
  WALLET,
  WatchListItems,
  user,
} from '@/__mocks__'
import coinService from '@/service/coin.service'
import transactionService from '@/service/transaction.service'
import watchListService from '@/service/watchList.service'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import { act } from 'react-dom/test-utils'
import { CLICK_ONCURRENCY, DISCOVER_ASSETS } from '@/strings/constant'
import { useNavigate } from 'react-router-dom'
import * as authContext from '@/context/AuthContext'
import walletService from '@/service/wallet.service'

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

jest.mock('@/service/coin.service')
jest.mock('@/service/watchList.service')
jest.mock('@/service/transaction.service')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

describe('DashBoardPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    const fetchAllCoins = jest.spyOn(coinService, 'fetchAllCoins')
      ; (useNavigate as jest.Mock).mockReturnValue(jest.fn())

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

    jest.spyOn(authContext, 'useAuthContext').mockReturnValue({
      user: user,
    } as any)

    jest
      .spyOn(walletService, 'fetchAlllWalletByUserId')
      .mockReturnValue(Promise.resolve(WALLET))

  })
  test('Check render working or not if new User', async () => {
    act(() => {
      render(
        <ThemeProvider theme={theme}>
          <DashBoardPage />
        </ThemeProvider>
      )
    })

    await waitFor(() => {
      screen.getAllByText('Watchlist')
      screen.getByText(CLICK_ONCURRENCY)
      expect(transactionService.fetchAllTransaction).toBeCalled()
      expect(watchListService.getDashBoardWatchList).toBeCalled()
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
          <DashBoardPage />
        </ThemeProvider>
      )
    })

    await waitFor(() => {
      screen.getAllByText('Watchlist')
      expect(screen.queryByText(CLICK_ONCURRENCY)).toBeNull()
      expect(fetchAllTransaction).toBeCalled()
      expect(fetchAllTransaction).toBeCalled()
      expect(getDashBoardWatchList).toBeCalled()
      expect(walletService.fetchAlllWalletByUserId).toBeCalled()
      fireEvent.click(screen.getByText(DISCOVER_ASSETS))
      expect(useNavigate).toBeCalled()
    })
  })
  test('If user undefied api would not be call', async () => {
    const fetchAllCoins = jest.spyOn(coinService, 'fetchAllCoins')
    jest.spyOn(authContext, 'useAuthContext').mockReturnValue({
      user: undefined,
    } as any)


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
          <DashBoardPage />
        </ThemeProvider>
      )
    })

    await waitFor(() => {
      screen.getAllByText('Watchlist')
      expect(screen.queryByText(CLICK_ONCURRENCY)).toBeNull()
      expect(fetchAllTransaction).not.toBeCalled()
      expect(fetchAllTransaction).not.toBeCalled()
      expect(getDashBoardWatchList).not.toBeCalled()
      expect(walletService.fetchAlllWalletByUserId).not.toBeCalled()
    })
  })

})
