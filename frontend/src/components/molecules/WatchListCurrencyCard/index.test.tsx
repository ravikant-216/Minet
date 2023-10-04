import theme from '@/theme'
import { render, screen } from '@testing-library/react'
import { WatchListCurrencyCard } from '.'

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

describe('WatchListCurrencyCard', () => {
  const mockProps = {
    icon: 'static/media/public/assests/icons/bitcoin.svg',
    label1: 'Bitcoin',
    label2: '$3,00,439.93',
    color1: theme.palette.text.highEmphasis,
    color2: theme.palette.text.highEmphasis,
    trendValue: 1.2,
    graphProps: {
      height: '98px',
      opacity: 0.5,
      series: [
        {
          data: [0, 100, 50, 75, 75, 150, 10, 100, 140],
          name: 'Bitcoin',
        },
      ],
      width: '200px',
      showLabel: false,
      showGrid: false,
    },
    width: '408px',
  }

  it('renders correctly', () => {
    render(
      <WatchListCurrencyCard
        label2Variant={'button'}
        label1Variant={'body1'}
        {...mockProps}
      />
    )

    expect(screen.getByText('24h')).toBeInTheDocument()
    expect(screen.getByText('Bitcoin')).toBeInTheDocument()
  })

  it('renders with correct colors when trendValue is positive', () => {
    render(
      <WatchListCurrencyCard
        label2Variant={'button'}
        label1Variant={'body1'}
        {...mockProps}
      />
    )
    expect(screen.getByText('24h')).toBeInTheDocument()
    expect(screen.getByText('Bitcoin')).toBeInTheDocument()
  })

  it('renders with correct colors when trendValue is negative', () => {
    const negativeProps = { ...mockProps, trendValue: -10 }
    render(
      <WatchListCurrencyCard
        label2Variant={'button'}
        label1Variant={'body1'}
        {...negativeProps}
      />
    )

    expect(screen.getByText('$3,00,439.93')).toBeInTheDocument()
    expect(screen.getByText('Bitcoin')).toBeInTheDocument()
  })
})
