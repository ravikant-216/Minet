import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CurrencySelection from '.'

describe('CurrencySelection tests', () => {
  it('renders the CurrencySelection component', () => {
    const mockOnClick = jest.fn()

    render(<CurrencySelection onClick={mockOnClick} />)

    const currencySelection = screen.getByTestId('currency-selection')
    expect(currencySelection).toBeInTheDocument()

    const tab0 = screen.getByTestId('tab-0')
    fireEvent.click(tab0)

    expect(mockOnClick).toHaveBeenCalledWith('Bitcoin')

    const tab1 = screen.getByTestId('tab-1')
    fireEvent.click(tab1)

    const tabValue = currencySelection.querySelector('.Mui-selected')
    expect(tabValue).toHaveTextContent('XRP')
  })
})
