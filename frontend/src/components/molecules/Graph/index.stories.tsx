import type { Meta, StoryObj } from '@storybook/react'
import Graph from '.'
import theme from '@/theme/index'
import {
  BITCOIN,
  CRYPTO,
  GRAPH_DATA,
  PLOTS_DATA,
  SINGLE_GRAPH_DATA,
  SINGLE_GRAPH_LOSS_DATA,
  SINGLE_GRAPH_PROFIT_DATA,
} from '@/strings/constant'

const meta: Meta<typeof Graph> = {
  component: Graph,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Graph>

const bitCoinProfitData = [
  {
    name: BITCOIN,
    data: SINGLE_GRAPH_PROFIT_DATA,
  },
]

const bitCoinLossData = [
  {
    name: BITCOIN,
    data: SINGLE_GRAPH_LOSS_DATA,
  },
]

const cryptoDetailData = [
  {
    name: CRYPTO,
    data: SINGLE_GRAPH_DATA,
  },
]

export const BitcoinGainGraph: Story = {
  args: {
    series: bitCoinProfitData,
    height: theme.spacing(25),
    width: theme.spacing(50),
    showLabel: false,
    showGrid: false,
    strokeColors: [theme.palette.gamma.SUCCESS_500],
    fillColors: [theme.palette.gamma.SUCCESS_100],
    opacity: 0.5,
  },
}

export const BitcoinLossGraph: Story = {
  args: {
    series: bitCoinLossData,
    height: theme.spacing(25),
    width: theme.spacing(50),
    showLabel: false,
    showGrid: false,
    strokeColors: [theme.palette.gamma.ERROR_300],
    fillColors: [theme.palette.gamma.ERROR_100],
    opacity: 0.5,
  },
}

export const IndividualCryptoDetailGraph: Story = {
  args: {
    series: cryptoDetailData,
    height: theme.spacing(67),
    width: theme.spacing(297),
    showLabel: true,
    showGrid: true,
    yaxisPlots: PLOTS_DATA,
    strokeColors: [theme.palette.gamma.WARNING_300],
    fillColors: [theme.palette.gamma.WARNING_100],
    opacity: 0.5,
  },
}

export const MyPortfolioGraph: Story = {
  args: {
    series: GRAPH_DATA,
    height: theme.spacing(67.5),
    width: theme.spacing(182.25),
    showLabel: true,
    showGrid: true,
    yaxisPlots: PLOTS_DATA,
    strokeColors: [theme.palette.gamma.WARNING_300, theme.palette.primary[500]],
    fillColors: [theme.palette.gamma.WARNING_100, theme.palette.primary[300]],
    opacity: 0.5,
  },
}
