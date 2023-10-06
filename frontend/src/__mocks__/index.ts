import { CoinType, Transacton, User } from '@/utils/types'
import bitcoin from '@Assets/icons/blackBitcoin.svg'
import ethirum from '@Assets/icons/Ethereum.svg'

export const coins: CoinType[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    image: bitcoin as string,
    price: '1,000',
    sign: 'BTC',
  },
  {
    id: 'ethirum',
    name: 'Ethirum',
    image: ethirum as string,
    price: '1,000',
    sign: 'ETH',
  },
]

export const user: User = {
  id: '1',
  name: 'John Doe',
}

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
