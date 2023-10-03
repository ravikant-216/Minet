import { Meta, StoryFn } from '@storybook/react'
import AccountDetailCard, { AccountDetailCardProps } from '.'
import { USD } from '@/strings/constant'

export default {
  component: AccountDetailCard,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<AccountDetailCardProps> = (args) => (
  <AccountDetailCard {...args} />
)

export const PurchaseBitCoin = Template.bind({})
PurchaseBitCoin.args = {
  isBuy: true,
  userBalance: '$34,000.00',
  sliderMaxValue: 34000,
  sliderValue: '1BTC = $3,406,069.54',
  crypto: '0.0234510 ',
  label: 'BTC',
}

export const SellBitCoin = Template.bind({})
SellBitCoin.args = {
  isBuy: false,
  userBalance: '$34,000.00',
  sliderMaxValue: 34000,
  sliderValue: '1BTC = $3,406,069.54',
  crypto: '0.0234510 ',
  label: USD,
}
