import { CoinType, Transacton, User, WatchListItemType } from '@/utils/types'
import bitcoin from '@Assets/icons/bitcoin.svg'
import ethereum from '@Assets/icons/ethereum.svg'
import ethereum2Black from '@Assets/icons/ethereum2Black.svg'

export const coins: CoinType[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    image: bitcoin as string,
    price: '1,000',
    sign: 'BTC',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    image: ethereum as string,
    price: '1,000',
    sign: 'ETH',
  },
]

export const user: User = {
  id: '1',
  name: 'John Doe',
}

export const WatchListItems: WatchListItemType[] = [
  {
    id: '1',
    name: 'Bitcoin',
    image: bitcoin as string,
    value: '$3,00,439.93',
    graphData: {
      name: 'Bitcoin',
      data: [0, 100, 50, 75, 75, 150, 10, 100, 140],
    },
    trendValue: 1.2,
  },
  {
    id: '2',
    name: 'Ethereum',
    image: ethereum as string,
    value: '$1,297.24',
    graphData: {
      name: 'Ethereum',
      data: [0, 100, 50, 75, 75, 150, 10, 100, 140],
    },
    trendValue: -1.3,
  },
  {
    id: '3',
    name: 'Ethereum 2',
    image: ethereum2Black as string,
    value: '$1,297.24',
    graphData: {
      name: 'Ethereum 2',
      data: [0, 100, 50, 75, 75, 150, 10, 100, 140],
    },
    trendValue: -1.5,
  },
]

export const transactions: Transacton[] = [
  {
    id: '1',
    date: new Date().toISOString(),
    user,
    amount: 100,
    status: 'success',
    cryptoType: coins[0],
    transactionType: 'buy',
  },
  {
    id: '2',
    date: new Date().toISOString(),
    user,
    amount: 200,
    status: 'success',
    cryptoType: coins[0],
    transactionType: 'buy',
  },
  {
    id: '3',
    date: new Date().toISOString(),
    user,
    amount: 0.001,
    status: 'pending',
    cryptoType: coins[0],
    transactionType: 'buy',
  },
  {
    id: '4',
    date: new Date().toISOString(),
    user,
    amount: 0.001,
    status: 'cancel',
    cryptoType: coins[0],
    transactionType: 'buy',
  },
  {
    id: '5',
    date: new Date().toISOString(),
    user,
    amount: 0.001,
    status: 'success',
    cryptoType: coins[0],
    transactionType: 'buy',
  },
  {
    id: '6',
    date: new Date().toISOString(),
    user,
    amount: 0.001,
    status: 'success',
    cryptoType: coins[0],
    transactionType: 'buy',
  },
  {
    id: '7',
    date: new Date().toISOString(),
    user,
    amount: 0.001,
    status: 'success',
    cryptoType: coins[0],
    transactionType: 'sold',
  },
]
