import React from 'react'
import { render, screen } from '@testing-library/react'
import CashWalletScreen from '.'
import recentTransactionService from '@/service/recentTransaction.service'

jest.mock('@/api/api')
jest.mock('@/service/recentTransaction.service')
beforeEach(() => {
  jest.resetAllMocks()
  const fetchAllTransactions = jest.spyOn(
    recentTransactionService,
    'fetchAllTransactions'
  )
  fetchAllTransactions.mockReturnValue(
    Promise.resolve([
      {
        id: '6f2b8e3f-9d3b-4f1d-9d8c-3e3e3e3e3e2e',
        date: '2023-07-29T02:35:42',
        status: 'success',
        transactionType: 'buy',
        amount: 0.032343,
        user: {
          id: 'b62177be-aca1-45d3-ab0e-60a9f4c79a5e',
          name: 'John Doe',
          email: 'john@gmail.com',
          password: 'JohnDoe@001',
          balance: 34000,
        },
        cryptoType: {
          id: '6f2b8e3f-9d9b-4f1d-9d8c-3e3f3e3e3e2e',
          name: 'Dogecoin',
          sign: 'DOGE',
          image:
            'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
          price: '17.64',
        },
      },
    ])
  )
  render(<CashWalletScreen id="b62177be-aca1-45d3-ab0e-60a9f4c79a5e" />)
})

describe('CashWalletScreen', () => {
  it('renders the component with initial data', async () => {
    expect(screen.getByText('USD Coin')).toBeInTheDocument()
    expect(screen.getByText('Cash')).toBeInTheDocument()
    expect(screen.getByAltText('dollar-image')).toBeInTheDocument()
    expect(screen.getByText('0.0234510 BTC ($85,553.73)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search all assets')).toBeInTheDocument()
  })
  it('fetches and sets transaction data', () => {
    setInterval(() => {
      expect(screen.getByText('Total balance')).toBeInTheDocument()
      expect(screen.getByAltText('icon')).toBeInTheDocument()
      expect(screen.getByText('Received Dogecoin')).toBeInTheDocument()
      expect(screen.getByText('+0.032343 DOGE')).toBeInTheDocument()
    }, 1000)
  })
})
