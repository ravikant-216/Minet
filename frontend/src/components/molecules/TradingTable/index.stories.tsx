import { Meta, StoryFn } from '@storybook/react'
import TradeTabel, { TradeTableProps } from '.'
import { COINS } from '@/strings/constant'

const meta: Meta<typeof TradeTabel> = {
  component: TradeTabel,
  tags: ['autodocs'],
  argTypes: {
    watchlist: {
      action: 'id',
    },
    cardClick: {
      action: 'id',
    },
  },
}

export default meta

const Template: StoryFn<TradeTableProps> = (args) => <TradeTabel {...args} />

export const Table = Template.bind({})
Table.args = {
  data: COINS,
}
