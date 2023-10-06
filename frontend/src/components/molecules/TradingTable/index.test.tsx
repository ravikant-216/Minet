import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TradeTable from '.'
import { COINS } from '@/strings/constant'

const mockOnClick = jest.fn()
const mockOnStarClick = jest.fn()
describe('TradeTable tests', () => {
  it('renders the TradeTable component with data', () => {
    render(
      <TradeTable
        data={COINS}
        cardClick={mockOnClick}
        watchlist={mockOnStarClick}
      />
    )

    const tradeTable = screen.getByTestId('Trade-table')
    expect(tradeTable).toBeInTheDocument()

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Price')).toBeInTheDocument()
    expect(screen.getByText('Change')).toBeInTheDocument()
    expect(screen.getByText('Watch')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Bitcoin'))
    fireEvent.click(screen.getAllByAltText('Unchecked icon')[0])
    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnStarClick).toHaveBeenCalledTimes(1)
  })
})
