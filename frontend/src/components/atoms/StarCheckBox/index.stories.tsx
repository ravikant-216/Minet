import { Meta, StoryObj } from '@storybook/react'
import StarCheckBox from '.'

const meta: Meta<typeof StarCheckBox> = {
  component: StarCheckBox,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof StarCheckBox>

export const Example: Story = {
  args: {
    checked: true,
  },
}

export default meta
