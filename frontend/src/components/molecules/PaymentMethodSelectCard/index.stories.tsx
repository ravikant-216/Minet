import { Meta, StoryObj } from '@storybook/react'
import PaymentMethodSelectCard from '.'
import { PaymentOptions } from '@/strings/constant'

const meta: Meta<typeof PaymentMethodSelectCard> = {
  component: PaymentMethodSelectCard,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof PaymentMethodSelectCard>

export const Default: Story = {
  args: {
    paymentOptions: PaymentOptions,
  },
}

export default meta
