import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import PurchagePage from '.'
import { CryptoDetailData, user, walletMock } from '@/__mocks__'
import coinService from '@/service/coin.service'
import walletService from '@/service/wallet.service'
import transactionService from '@/service/transaction.service'
import { BUY_NOW } from '@/strings/constant'

describe('Purchase Page', () => {
  beforeEach(() => {
    jest
      .spyOn(coinService, 'fetchAllCoins')
      .mockReturnValue(Promise.resolve(CryptoDetailData))
    jest
      .spyOn(walletService, 'fetchUserUsbWallletData')
      .mockReturnValue(Promise.resolve(walletMock))
    jest.spyOn(transactionService, 'createNewTransaction')
  })
  test('Render Purchase page', async () => {
    render(<PurchagePage user={user} />)
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
    })
  })
})
