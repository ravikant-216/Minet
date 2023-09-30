import { Meta, StoryFn } from '@storybook/react'
import VerticalStepper from './index'
import { PurchaseEtherium, SellBitcoin } from '@/strings/constant'

export default {
  component: VerticalStepper,
  tags: ['autodocs'],
} as Meta<typeof VerticalStepper>

const Template: StoryFn<typeof VerticalStepper> = (args) => (
  <VerticalStepper {...args} />
)

export const PurchaseStepper = Template.bind({})
PurchaseStepper.args = {
  paymentIcon: PurchaseEtherium.paymentIcon,
  paymentValue: PurchaseEtherium.paymentValue,
  depositIcon: PurchaseEtherium.depositIcon,
  depositValue: PurchaseEtherium.depositValue,
  deleveryFee: PurchaseEtherium.deleveryFee,
  paymentText: PurchaseEtherium.paymentText,
}

export const SellStepper = Template.bind({})
SellStepper.args = {
  paymentIcon: SellBitcoin.paymentIcon,
  paymentValue: SellBitcoin.paymentValue,
  depositIcon: SellBitcoin.depositIcon,
  depositValue: SellBitcoin.depositValue,
  deleveryFee: SellBitcoin.deleveryFee,
  paymentText: SellBitcoin.paymentText,
}
