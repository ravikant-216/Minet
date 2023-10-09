// Import the necessary modules
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { WatchListCurrencyCard, WatchListCurrencyCardProps } from '.'
import theme from '@/theme'
export default {
  component: WatchListCurrencyCard,
} as Meta

const Template: Story<WatchListCurrencyCardProps> = (args) => (
  <WatchListCurrencyCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: 'static/media/public/assests/icons/bitcoin.svg',
  label1: 'Bitcoin',
  label1Variant: 'body1',
  label2: '$3,00,439.93',
  label2Variant: 'body1',
  color1: theme.palette.text.highEmphasis,
  color2: theme.palette.text.highEmphasis,
  trendValue: 1.2,
  graphProps: {
    height: 'inherit',
    opacity: 0.5,
    series: [
      {
        data: [0, 100, 50, 75, 75, 150, 10, 100, 140],
        name: 'Bitcoin',
      },
    ],
    width: '200px',
    showLabel: false,
    showGrid: false,
  },
  width: '408px',
}

export const DownTrend = Template.bind({})
DownTrend.args = {
  icon: 'static/media/public/assests/icons/bitcoin.svg',
  label1: 'Ethereum',
  label1Variant: 'body1',
  label2: '$1,297.24',
  label2Variant: 'body1',
  color1: theme.palette.text.highEmphasis,
  color2: theme.palette.text.highEmphasis,
  trendValue: -1.3,
  graphProps: {
    height: '98px',
    opacity: 0.5,
    series: [
      {
        data: [0, 120, 100, 90, 50, 150, 20, 60, 30],
        name: 'Bitcoin',
      },
    ],
    showLabel: false,
    showGrid: false,
  },
  width: '100%',
}
