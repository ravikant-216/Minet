import { Meta, StoryObj } from '@storybook/react'
import WatchListCard from '.'
import BitCoin from '@Assets/icons/bitcoin.svg'

const meta: Meta<typeof WatchListCard> = {
  component: WatchListCard,
  tags: ['autodocs'],
  argTypes: {
    handleAddToWatchList: { action: 'clicked' },
  },
}

type Story = StoryObj<typeof WatchListCard>

export const Example: Story = {
  args: {
    image: BitCoin,
    name: 'Bitcoin',
    sign: 'BTC',
    trendValue: 8.3,
    circulatingSupply: 18.8,
    volIn24H: 2.9,
    marketCap: 64.2,
  },
}

export default meta
