import { Meta, StoryObj } from '@storybook/react'
import MyPortfolioWallet from '.'
import {
  CryptoDetailData,
  RecentTransactions as RecentTransactions,
  WALLET,
} from '@/__mocks__'

const meta: Meta<typeof MyPortfolioWallet> = {
  component: MyPortfolioWallet,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof MyPortfolioWallet>

export const WithTransaction: Story = {
  args: {
    coins: CryptoDetailData,
    recentTransactions: RecentTransactions,
    wallets: WALLET,
    width: '400px',
  },
}
export const WithOutTransaction: Story = {
  args: {
    coins: CryptoDetailData,
    wallets: WALLET,
    width: '400px',
  },
}

export default meta
