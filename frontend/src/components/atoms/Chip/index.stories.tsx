import { Meta, StoryFn } from '@storybook/react'
import ChipComponent from '@/components/atoms/Chip/index'
import theme from '@/theme/index'

export default {
  component: ChipComponent,
  argTypes: {
    handleChip: { action: 'clicked' },
  },
} as Meta<typeof ChipComponent>

const Template: StoryFn<typeof ChipComponent> = (args) => (
  <ChipComponent {...args} />
)

export const SoldChip = Template.bind({})
SoldChip.args = {
  label: 'Sold',
  textVariant: 'overline',
  textColor: theme.palette.gamma.GREY_500,
  background: theme.palette.gamma.GREY_100,
  padding: '2px 8px',
  borderRadius: theme.spacing(25),
}

export const Currency_Chip = Template.bind({})
Currency_Chip.args = {
  label: 'Bitcoin',
  textVariant: 'body2',
  textColor: theme.palette.text.lowEmphasis,
  background: `rgba(247, 147, 26, 0.2)`,
  padding: '8px 16px',
  borderRadius: '4px',
  height: '38px',
  isClicked: true,
  border: `2px solid #F7931A`,
}
