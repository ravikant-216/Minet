import { Meta, StoryObj } from '@storybook/react'
import DashBoardTemplate from '.'
import DashBoardWatchList from '@/components/organisms/DashBoardWatchList'
import { WatchListItems } from '@/__mocks__'

const meta: Meta<typeof DashBoardTemplate> = {
  component: DashBoardTemplate,
}

type Story = StoryObj<typeof DashBoardTemplate>

export const Example: Story = {
  args: {
    children: <DashBoardWatchList items={WatchListItems} p={4} />,
  },
}

export default meta
