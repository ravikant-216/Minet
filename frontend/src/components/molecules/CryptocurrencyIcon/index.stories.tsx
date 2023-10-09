import React from 'react'
import { Story, Meta } from '@storybook/react'
import { CryptoIcon, CryptoIconProps } from '.'
import ethereum from '@Assets/icons/ethereum.svg'
import theme from '@/theme'

export default {
  component: CryptoIcon,
} as Meta

const Template: Story<CryptoIconProps> = (args) => <CryptoIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: ethereum,
  label1: 'Ethereum',
  label2: 'ETH',
  label1Variant: 'heading6',
  label2Variant: 'body1',
  variant: 'overline',
  color2: theme.palette.text.mediumEmphasis,
  trendValue: 0.64,
  trendDirection: 'row',
  position: 'left',
  gap: 0,
}
