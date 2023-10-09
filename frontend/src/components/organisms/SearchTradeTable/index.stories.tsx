import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SearchTradeTable from '.'

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
}
