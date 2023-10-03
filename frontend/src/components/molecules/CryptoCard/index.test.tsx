import { render, screen } from '@testing-library/react'
import CryptoCard from '.'
import BitCoin from '@Assets/icons/bitCoin.svg'

describe('CryptoCard', () => {
  const props = {
    name: 'BitCoin',
    image: BitCoin,
    sign: 'BTC',
    amount: 2,
    rate: 0.5,
  }

  test('Check primary crypto', () => {
    render(<CryptoCard {...props} />)
    screen.getByText(props.name)
    screen.getByText(props.sign)
    screen.getByText(`+${Math.abs(props.rate)}%`)
  })

  test('Check secondary crypto', () => {
    render(<CryptoCard {...props} varient="secondary" />)
    screen.getByText(props.name)
    screen.getByText(props.sign)
    screen.getByText(`${Math.abs(props.rate)}%`)
  })

  test('Render Without Rate', () => {
    render(<CryptoCard {...props} rate={undefined} />)
    screen.getByText(props.name)
    screen.getByText(props.sign)
    screen.getByText(`$ ${Math.abs(props.amount)}`)
  })
})
