import { Meta, StoryObj } from '@storybook/react'
import Tabs from '.'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Tabs>

export const Example: Story = {
  args: {
    tabs: [
      {
        value: 'All Assets',
        label: 'All Assets',
      },
      {
        value: 'Watchlist',
        label: 'Watchlist',
      },
    ],
    value: 'All Assets',
  },
}

export default meta
