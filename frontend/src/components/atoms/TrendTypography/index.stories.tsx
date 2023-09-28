import { Meta, StoryObj } from '@storybook/react'
import TrendTypography from '.'

const meta: Meta<typeof TrendTypography> = {
  component: TrendTypography,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof TrendTypography>

export const Render: Story = {
  args: {
    value: 1,
  },
}

export default meta
