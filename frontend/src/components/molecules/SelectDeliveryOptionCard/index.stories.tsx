import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import SelectDeliveryOption from '.'

export default {
  component: SelectDeliveryOption,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof SelectDeliveryOption> = (args) => (
  <SelectDeliveryOption {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: false,
  coinType: 'Bitcoin',
  transactionFees: 'Transaction fees : 0.001 BTC',
  onDropDownClick: () => {},
}

export const OpenDropdown = Template.bind({})
OpenDropdown.args = {
  isOpen: true,
  coinType: 'Ethereum',
  transactionFees: 'Transaction fees : 0.005 ETH',
  onDropDownClick: () => {},
}
