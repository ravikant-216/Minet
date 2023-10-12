import React from 'react'
import { render, screen } from '@testing-library/react'
import CashWalletScreen from '.'
import { getAllTransactionsByUserId } from '@/api/api'

jest.mock('@/api/api')

beforeEach(() => {
  jest.resetAllMocks()
  ;(getAllTransactionsByUserId as jest.Mock).mockResolvedValue([
    {
      date: 'July 29',
      cryptoId: 1,
      status: 'SUCCESS',
      quantity: '0.032343',
      price: '3234',
    },
    {
      date: 'June 23',
      cryptoId: 2,
      status: 'FAILURE',
      quantity: '0.032343',
      price: '3234',
    },
    {
      date: 'June 21',
      cryptoId: 3,
      status: 'PENDING',
      quantity: '0.032343',
      price: '3234',
    },
  ])
  render(<CashWalletScreen id="b62177be-aca1-45d3-ab0e-60a9f4c79a5e" />)
})

describe('CashWalletScreen', () => {
  it('renders the component with initial data', async () => {
    expect(screen.getByText('USD Coin')).toBeInTheDocument()
    expect(screen.getByText('Cash')).toBeInTheDocument()
    expect(screen.getByAltText('dollar-image')).toBeInTheDocument()
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
