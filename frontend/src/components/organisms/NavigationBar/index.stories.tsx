import { Meta, StoryObj } from '@storybook/react'
import NavigationBar from '.'
import { NavigatonItems } from '@/strings/constant'

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  tags: ['autodocs'],
  argTypes: {
    handleOnClick: { action: 'clicked' },
  },
}

type Story = StoryObj<typeof NavigationBar>

export const Example: Story = {
  args: {
    navigationItems: NavigatonItems,
  },
}

export default meta
