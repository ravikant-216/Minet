import { Meta, StoryFn } from '@storybook/react'
import CurrencySelection, { CurrencySelectionProps } from '.'

export default {
  component: CurrencySelection,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<CurrencySelectionProps> = (args) => (
  <CurrencySelection {...args} />
)

export const CurrencySelectionTab = Template.bind({})
CurrencySelectionTab.args = {
  onClick: (id: string) => {
    console.log(id)
  },
}
