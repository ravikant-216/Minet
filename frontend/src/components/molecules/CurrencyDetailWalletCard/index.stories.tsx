import { Meta, Story } from '@storybook/react'
import CurrencyDetailWalletCard, { CurrencyDetailWalletCardProps } from '.'

export default {
  component: CurrencyDetailWalletCard,
} as Meta

const Template: Story<CurrencyDetailWalletCardProps> = (args) => (
  <CurrencyDetailWalletCard {...args} />
)

export const Pending = Template.bind({})
Pending.args = {
  type: 'pending',
  label1: 'Ethereum',
  label2: 'From Badgley',
  mounth: 'Jan',
  day: 27,
  transactionType: 'Sold',
  price: '+$408.53',
  cyprtoAmount: '+0.32345 ETH',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  label1: 'Ethereum',
  label2: 'From Badgley',
  mounth: 'Feb',
  day: 28,
  transactionType: 'Purchased',
  price: '+$408.53',
  cyprtoAmount: '+0.32345 ETH',
}

export const Cancel = Template.bind({})
Cancel.args = {
  type: 'cancel',
  label1: 'Ethereum',
  label2: 'From Badgley',
  mounth: 'Mar',
  day: 30,
  transactionType: 'Sold',
  price: '+$408.53',
  cyprtoAmount: '+0.32345 ETH',
}
