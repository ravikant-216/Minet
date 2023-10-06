import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import PaymentSuccessCard from '.'

export default {
  component: PaymentSuccessCard,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof PaymentSuccessCard> = (args) => (
  <PaymentSuccessCard {...args} />
)

export const BuyBitcoin = Template.bind({})
BuyBitcoin.args = {
  coinAmount: 0.023451,
  coinCode: 'BTC',
  isSell: false,
  onClick: () => console.log('GO TO USD COIN clicked'),
}

export const BuyEthereum = Template.bind({})
BuyEthereum.args = {
  coinAmount: 0.523451,
  coinCode: 'ETH',
  isSell: false,
  onClick: () => console.log('GO TO USD COIN clicked'),
}

export const SellEthereum = Template.bind({})
SellEthereum.args = {
  coinAmount: 0.523451,
  coinCode: 'ETH',
  isSell: true,
  onClick: () => console.log('GO TO USD COIN clicked'),
}
