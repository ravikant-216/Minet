import {
  CoinType,
  CryptoDetailType,
  RencentTransactionType,
  Transacton,
  User,
  WatchListItemType,
} from '@/utils/types'
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

export const CryptoDetailData: CryptoDetailType[] = [
  {
    id: '7590808b-044e-4140-b34b-9466cdc15cca',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    price: 3285553.73,
    change: 1.06,
    marketCap: 60.1,
    volume: 2.9,
    circulatingSupply: 18.8,
  },
  {
    id: '221264a8-6d9e-435e-be0e-e8d253865581',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    price: 216678.1,
    change: -5.49,
    marketCap: 25.4,
    volume: 2.3,
    circulatingSupply: 18.2,
  },
  {
    id: '4a63bcb7-c943-41b7-a5cc-25c4a66ee1db',
    name: 'Tether',
    symbol: 'USDT',
    icon: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663',
    price: 216678.1,
    change: -5.49,
    marketCap: 25.4,
    volume: 5.5,
    circulatingSupply: 17.8,
  },
]

export const RecentTransactions: RencentTransactionType[] = [
  {
    id: '1',
    transactionDate: new Date(),
    cryptoName: 'Bitcoin BTC',
    transactionType: 'Sold',
    cryptoAmount: '-0.0234510 BTC',
    dollarAmount: '+34000.00',
  },
  {
    id: '2',
    transactionDate: new Date(),
    cryptoName: 'Bitcoin BTC',
    transactionType: 'Purchased',
    cryptoAmount: '+0.00010 BTC',
    dollarAmount: '+34000.00',
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
