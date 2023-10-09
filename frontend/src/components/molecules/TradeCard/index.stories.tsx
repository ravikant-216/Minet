import { Meta, StoryFn } from '@storybook/react'
import TradeCard from '.'
import bitcoin from '@Assets/icons/bitcoin.svg'
import ethereum from '@Assets/icons/ethereum.svg'

export default {
  component: TradeCard,
  tags: ['autodocs'],
  argTypes: {
    onCardClick: { action: 'clicked' },
    onStartClick: { action: 'addToWatchList' },
  },
} as Meta

const Template: StoryFn<typeof TradeCard> = (args) => <TradeCard {...args} />

export const BitcoinCard = Template.bind({})
BitcoinCard.args = {
  imageSrc: bitcoin,
  currencyName: 'Bitcoin',
  currencyCode: 'BTC',
  price: '$3,285,553.73',
  change: 1.06,
  marketCap: '$60.1T',
  checked: true,
}

export const EthereumCard = Template.bind({})
EthereumCard.args = {
  imageSrc: ethereum,
  currencyName: 'Ethereum',
  currencyCode: 'ETH',
  price: '$216,678.10',
  change: -5.49,
  marketCap: '$25.4T',
  checked: false,
}
