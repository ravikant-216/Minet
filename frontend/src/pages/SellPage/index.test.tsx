/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { CryptoDetailData, WALLET, user } from '@/__mocks__'
import coinService from '@/service/coin.service'
import transactionService from '@/service/transaction.service'
import { SELL_NOW } from '@/strings/constant'
import SellPage from '.'
import walletService from '@/service/wallet.service'
import { BrowserRouter } from 'react-router-dom'
import * as Router from 'react-router'

describe('Sell Page', () => {
  const navigateMock = jest.fn()
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
    }))
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateMock)
    jest
      .spyOn(coinService, 'fetchAllCoins')
      .mockReturnValue(Promise.resolve(CryptoDetailData))

    jest
      .spyOn(walletService, 'fetchAlllWalletByUserId')
      .mockReturnValue(Promise.resolve(WALLET))

    jest
      .spyOn(transactionService, 'createNewTransaction')
      .mockReturnValue(jest.fn() as any)
  })
  test('Render Purchase page Not called', async () => {
    render(
      <BrowserRouter>
        <SellPage user={user} />
      </BrowserRouter>
    )
    await waitFor(() => {
      expect(coinService.fetchAllCoins).toBeCalled()
      fireEvent.click(screen.getAllByText(CryptoDetailData[2].name)[0])
      const byeNowButton = screen.getByText(SELL_NOW)
      fireEvent.click(byeNowButton)
    })
    await waitFor(() => {
      expect(transactionService.createNewTransaction).not.toBeCalled()
    })
  })
  test('Render Purchase page called', async () => {
    render(
      <BrowserRouter>
        <SellPage user={user} />
      </BrowserRouter>
    )
    await waitFor(() => {
      expect(coinService.fetchAllCoins).toBeCalled()
      const slider = screen.getByRole('slider')
      fireEvent.change(slider, { target: { value: 0.4 } })
      fireEvent.click(screen.getAllByText(CryptoDetailData[0].name)[0])
      const byeNowButton = screen.getByText(SELL_NOW)
      fireEvent.click(byeNowButton)
    })
    await waitFor(() => {
      expect(transactionService.createNewTransaction).toBeCalled()
    })
  })
})
