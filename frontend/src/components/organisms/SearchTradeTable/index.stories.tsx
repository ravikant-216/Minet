import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SearchTradeTable from '.'
import { TRADE_DATA } from '@/strings/constant'

export default {
  component: SearchTradeTable,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof SearchTradeTable> = (args) => (
  <SearchTradeTable {...args} />
)

export const Default = Template.bind({})
Default.args = {
  onCardClick: (id) => console.log(id),
  tradeTableData: TRADE_DATA,
  watchListData: TRADE_DATA.filter((t) => t.checked),
  onStarIconClick: (id, checked) => console.log(id, checked),
}
