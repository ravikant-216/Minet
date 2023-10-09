import { Meta, StoryObj } from '@storybook/react'
import DashBoardWatchList from '.'
import { WatchListItems } from '@/__mocks__'

const meta: Meta<typeof DashBoardWatchList> = {
  component: DashBoardWatchList,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof DashBoardWatchList>

export const Example: Story = {
  args: {
    items: WatchListItems,
  },
}

export default meta
