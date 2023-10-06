import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import DashboardHeader from '.'
import avatar from '@Assets/icons/avatar.svg'
import { DASHBOARD } from '@/strings/constant'

export default {
  component: DashboardHeader,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof DashboardHeader> = (args) => (
  <DashboardHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  dashboardHeading: DASHBOARD,
  avatar: avatar,
  isButton: true,
  onBuy: action('Buy button clicked'),
  onSell: action('Sell button clicked'),
}

export const TradeScreenHeading = Template.bind({})
TradeScreenHeading.args = {
  dashboardHeading: 'Trade',
  avatar: avatar,
  isButton: true,
  onBuy: action('Buy button clicked'),
  onSell: action('Sell button clicked'),
}

export const PurchaseScreenHeading = Template.bind({})
PurchaseScreenHeading.args = {
  dashboardHeading: 'Checkout',
  avatar: avatar,
  isButton: false,
}
