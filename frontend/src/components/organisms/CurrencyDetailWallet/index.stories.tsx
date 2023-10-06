import { Meta, StoryObj } from '@storybook/react'
import CurrencyDetailWallet from '.'
import { transactions } from '@/__mocks__'

const meta: Meta<typeof CurrencyDetailWallet> = {
  component: CurrencyDetailWallet,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof CurrencyDetailWallet>

export const Default: Story = {
  args: {
    transactions,
    textAlign: 'right',
    totalBalance: '0.0234510 BTC ($85,553.73)',
  },
}

export const Example: Story = {
  args: {
    transactions,
    textAlign: 'left',
    totalBalance: '$ 34,000',
  },
}

export default meta
