/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import PurchagePage from '.'
import { CryptoDetailData, user, walletMock } from '@/__mocks__'
import coinService from '@/service/coin.service'
import walletService from '@/service/wallet.service'
import transactionService from '@/service/transaction.service'
import { BUY_NOW } from '@/strings/constant'
import { BrowserRouter } from 'react-router-dom'
import * as Router from 'react-router'
import * as authContext from '@/context/AuthContext'

describe('Purchase Page', () => {
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
      .spyOn(walletService, 'fetchUserUsbWallletData')
      .mockReturnValue(Promise.resolve(walletMock))
    jest.spyOn(transactionService, 'createNewTransaction')
    jest.spyOn(authContext, 'useAuthContext').mockReturnValue({
      user: user,
    } as any)
  })
  test('Render Purchase page', async () => {
    render(
      <BrowserRouter>
        <PurchagePage />
      </BrowserRouter>
    )
    screen.getByText('Payment Method')
    await waitFor(() => {
      expect(coinService.fetchAllCoins).toBeCalled()
      expect(walletService.fetchUserUsbWallletData).toBeCalled()
      const slider = screen.getByRole('slider')
      fireEvent.change(slider, { target: { value: 75 } })
      fireEvent.click(screen.getByText(CryptoDetailData[1].name))
      const byeNowButton = screen.getByText(BUY_NOW)
      fireEvent.click(byeNowButton)
    })
    await waitFor(() => {
      expect(transactionService.createNewTransaction).toBeCalled()
      expect(Router.useNavigate()).toBeCalled()
    })
  })
})
