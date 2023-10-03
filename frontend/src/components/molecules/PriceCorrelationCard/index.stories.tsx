import { Meta, StoryFn } from '@storybook/react'
import CorrelationCard, { CorrelationCardProps } from '.'
import { PRICE_CORRELATION_WITH, CORRELATION_CARD } from '@/strings/constant'

export default {
  component: CorrelationCard,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<CorrelationCardProps> = (args) => (
  <CorrelationCard {...args} />
)

export const PriceCorrelationCard = Template.bind({})
PriceCorrelationCard.args = {
  CardName: PRICE_CORRELATION_WITH,
  CardData: CORRELATION_CARD,
}
