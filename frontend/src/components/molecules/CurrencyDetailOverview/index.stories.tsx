import { Meta, StoryObj } from '@storybook/react'
import CurrencyDetailOverview from '.'
import { props } from './constant'

const meta: Meta = {
  component: CurrencyDetailOverview,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof CurrencyDetailOverview>

export const Example: Story = {
  args: props,
}

export default meta
