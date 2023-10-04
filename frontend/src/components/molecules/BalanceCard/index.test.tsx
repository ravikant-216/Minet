import { render, screen } from '@testing-library/react'
import BitCoin from '@Assets/icons/bitcoin.svg'
import theme from '@/theme'
import BalanceCard from '.'

describe('BalanceCard', () => {
  const props = {
    title: 'Total Balance',
    logo: BitCoin,
    name: 'BitCoin',
    detail: '0.0234510 BTC',
    detailColor: theme.palette.text.highEmphasis as string,
  }
  test('should be true', () => {
    render(<BalanceCard {...props} detailVariant="subtitle2" />)
    screen.getByText(props.title)
    screen.getByText(props.name)
    screen.getByText(props.detail)
  })
})
