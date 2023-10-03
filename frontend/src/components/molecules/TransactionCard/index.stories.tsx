import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import RecentTransactionCard from '.'
import {
  TRANSACTION_CARD_COIN_NAME,
  TRANSACTION_IN_CRYPTO,
  TRANSACTION_IN_DOLLAR,
  TRANSACTION_TYPE,
} from '@/strings/constant'

export default {
  component: RecentTransactionCard,
  tags: ['autodocs'],
} as Meta<typeof RecentTransactionCard>

const Template: StoryFn<typeof RecentTransactionCard> = (args) => (
  <RecentTransactionCard {...args} />
)

export const Sold = Template.bind({})
Sold.args = {
  transactionDate: new Date(),
  cryptoName: TRANSACTION_CARD_COIN_NAME,
  transactionType: TRANSACTION_TYPE[0],
  cryptoAmount: TRANSACTION_IN_CRYPTO,
  dollarAmount: TRANSACTION_IN_DOLLAR,
}

export const Purchased = Template.bind({})
Purchased.args = {
  transactionDate: new Date(),
  cryptoName: TRANSACTION_CARD_COIN_NAME,
  transactionType: TRANSACTION_TYPE[1],
  cryptoAmount: TRANSACTION_IN_CRYPTO,
  dollarAmount: TRANSACTION_IN_DOLLAR,
}
