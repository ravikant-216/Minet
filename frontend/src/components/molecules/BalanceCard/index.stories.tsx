import { Meta, StoryObj } from '@storybook/react'
import BalanceCard from '.'
import BitCoin from '@Assets/icons/bitcoin.svg'
import UsdCoin from '@Assets/icons/UsdCoin.svg'
import theme from '@/theme'

const meta: Meta<typeof BalanceCard> = {
  component: BalanceCard,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof BalanceCard>

export const TotalBalance: Story = {
  args: {
    title: 'Total Balance',
    logo: BitCoin,
    name: 'BitCoin',
    detail: '0.0234510 BTC',
    detailVariant: 'subtitle1',
    detailColor: theme.palette.text.highEmphasis,
  },
}

export const DepositTo: Story = {
  args: {
    title: 'Deposit to',
    logo: UsdCoin,
    name: 'USD Coin (Cash)',
    detail: 'Default',
    detailVariant: 'caption2',
    detailColor: theme.palette.text.mediumEmphasis,
  },
}

export default meta
