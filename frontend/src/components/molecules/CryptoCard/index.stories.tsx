import { Meta, StoryObj } from '@storybook/react'
import CryptoCard from '.'
// eslint-disable-next-line import/no-unresolved
import BitCoin from '@Assets/icons/bitcoin.svg'
import UsdCoin from '@Assets/icons/UsdCoin.svg'
import Ethereum from '@Assets/icons/Ethereum.svg'

const meta: Meta<typeof CryptoCard> = {
  component: CryptoCard,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof CryptoCard>

export const PositiveRate: Story = {
  args: {
    name: 'BitCoin',
    image: BitCoin,
    sign: 'BTC',
    amount: 2,
    rate: 0.5,
    width: '400px',
  },
}

export const NegetiveRate: Story = {
  args: {
    name: 'BitCoin',
    image: BitCoin,
    sign: 'BTC',
    amount: 2,
    rate: -0.5,
    width: '400px',
  },
}

export const Secondary: Story = {
  args: {
    varient: 'secondary',
    name: 'Ethereum',
    image: Ethereum,
    sign: 'Moves tightly together',
    amount: 230966.85,
    rate: 86,
    width: '400px',
  },
}

export const NoRate: Story = {
  args: {
    name: 'USD Coin',
    image: UsdCoin,
    sign: 'US Dollar',
    amount: 34000.0,
    width: '400px',
  },
}

export default meta
