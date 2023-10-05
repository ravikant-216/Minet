import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import CryptoSelectCard, { CryptoSelectCardProps } from '.'
import { CARDS } from '@/strings/constant'
export default {
  component: CryptoSelectCard,
} as Meta

const Template: Story<CryptoSelectCardProps> = (args) => (
  <CryptoSelectCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  cards: CARDS,
  onClick: action('onClick'),
}
