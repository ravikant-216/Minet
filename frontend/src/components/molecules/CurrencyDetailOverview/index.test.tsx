import { render, screen } from '@testing-library/react'
import CurrencyDetailOverview from '.'
import { props } from './constant'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

describe('CurrencyDetailOverview', () => {
  test('renders CurrencyDetailOverview component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CurrencyDetailOverview {...props} />
      </ThemeProvider>
    )
    screen.getAllByText(props.name)
    screen.getByText(props.currentValue)
  })
})
