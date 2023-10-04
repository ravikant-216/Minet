import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyPortfolio from '.'
import { ThemeProvider } from '@emotion/react'
import theme from '@/theme'
import { MOCK_DATA_ONE, MOCK_DATA_TWO } from '@/strings/constant'

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

describe('MyPortfolio tests', () => {
  it('renders the MyPortfolio component withdata', () => {
    render(
      <ThemeProvider theme={theme}>
        <MyPortfolio {...MOCK_DATA_ONE} />
      </ThemeProvider>
    )

    const text = screen.getByTestId('myportfolio')
    expect(text).toBeInTheDocument()
  })

  it('renders the MyPortfolio component without data', () => {
    render(
      <ThemeProvider theme={theme}>
        <MyPortfolio {...MOCK_DATA_TWO} />
      </ThemeProvider>
    )

    const text = screen.getByTestId('myportfolio')
    expect(text).toBeInTheDocument()
  })
})
