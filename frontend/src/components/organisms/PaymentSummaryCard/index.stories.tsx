import { Meta, StoryFn } from '@storybook/react'
import PaymentCardComponent, { PaymentCardProps } from '.'

const meta: Meta<typeof PaymentCardComponent> = {
  component: PaymentCardComponent,
  tags: ['autodocs'],
  argTypes: {
    onButtonClick: {
      action: 'onButtonClick',
    },
  },
}

export default meta

const Template: StoryFn<PaymentCardProps> = (args) => (
  <PaymentCardComponent {...args} />
)

export const BuyCard = Template.bind({})
BuyCard.args = {
  type: 'buy',
  buyValue: 0.023451,
  cryptoPrice: 3406069.54,
  symbol: 'BTC',
  transactionFee: 1000.0,
  cryptoCoin: 'bitcoin',
  deliveryFee: '0.005',
}

export const SellCard = Template.bind({})
SellCard.args = {
  type: 'sell',
  buyValue: 0.023451,
  cryptoPrice: 3406069.54,
  symbol: 'BTC',
  transactionFee: 1000.0,
  cryptoCoin: 'Ethereum',
  deliveryFee: '0.005',
}
