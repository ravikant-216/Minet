import { Meta, StoryObj } from '@storybook/react'
import MyPortfolioWallet from '.'
import {
  CryptoDetailData,
  RecentTransactions as RecentTransactions,
} from '@/__mocks__'

const meta: Meta<typeof MyPortfolioWallet> = {
  component: MyPortfolioWallet,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof MyPortfolioWallet>

export const WithTransaction: Story = {
  args: {
    coins: CryptoDetailData,
    totalBalance: 14027,
    usdWalletBalance: 34000.0,
    recentTransactions: RecentTransactions,
    width: '400px',
  },
}
export const WithOutTransaction: Story = {
  args: {
    coins: CryptoDetailData,
    totalBalance: 14027,
    usdWalletBalance: 34000.0,
    width: '400px',
  },
}

export default meta
