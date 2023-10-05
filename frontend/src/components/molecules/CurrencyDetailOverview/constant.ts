import { CORRELATION_CARD, GRAPH_DATA, PLOTS_DATA } from '@/strings/constant'
import { CurrencyDetailOverviewProps } from '.'

export const props: CurrencyDetailOverviewProps = {
  correlationCardData: CORRELATION_CARD,
  trendValue: 8.2,
  currentValue: '$3,285,553.73',
  name: 'Bitcoin',
  description: `
              The world’s first cryptocurrency, Bitcoin is stored and exchanged
              securely on the internet through a digital ledger known as a
              blockchain.Bitcoins are divisible into smaller units known as
              satoshis each satoshi is worth 0.00000001 bitcoin.
              `,
  yaxisPlotsData: PLOTS_DATA,
  plotData: GRAPH_DATA[0],
}
