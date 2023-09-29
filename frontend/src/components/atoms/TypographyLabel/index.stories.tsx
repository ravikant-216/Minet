import React from 'react'
import { Meta, Story } from '@storybook/react'
import TypographyLabel, { TypographyLabelProps } from '.'
import theme from '@/theme'

export default {
  component: TypographyLabel,
} as Meta

const Template: Story<TypographyLabelProps> = (args) => (
  <TypographyLabel {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label1: 'Circulating Supply',
  label2: '18.8M BTC',
  label1Variant: 'caption1',
  label2Variant: 'body1',
  position: 'left',
  color1: theme.palette.text.mediumEmphasis,
  color2: theme.palette.text.highEmphasis,
}
