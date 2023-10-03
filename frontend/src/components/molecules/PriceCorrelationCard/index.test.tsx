import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PRICE_CORRELATION_WITH, CORRELATION_CARD } from '@/strings/constant'
import CorrelationCard from '.'
import { ThemeProvider } from '@emotion/react'
import theme from '@/theme'

describe('CorrelationCard tests', () => {
  it('renders the CorrelationCard component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CorrelationCard
          CardName={PRICE_CORRELATION_WITH}
          CardData={CORRELATION_CARD}
        />
      </ThemeProvider>
    )
    const text = screen.getByTestId('correlation')
    expect(text).toBeInTheDocument()
  })
})
