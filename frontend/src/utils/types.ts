import { TypographyVariant as MuiTypographyVariant } from '@mui/material'

export interface PaymentMethodType {
  name: string
  balance: string
  type: 'Default'
}

export interface NavigationBarItem {
  value: string
  logo: string
}

export interface CorelationCardData {
  id: number
  cryptoImage: string
  cryptoName: string
  value: string
  amount: number
  value1: number
}

export interface GraphPlotData {
  name: string
  data: number[]
}

export interface TableData {
  id: number | string
  name: string
  src: string
  label: string
  price: number
  change: number
  marketCap: number
  checked: boolean
}

export interface CoinType {
  id: string
  name: string
  image: string
  price: string
  sign: string
}
export interface User {
  id: string
  name: string
}

export interface Transaction {
  id: string
  date: string
  transactionType: 'buy' | 'sold'
  cryptoType: CoinType
  amount: number
  status: 'success' | 'pending' | 'cancel'
  user: User
}

export interface TradeData {
  change: string
  checked: boolean
  id: number
  label: string
  marketCap: number
  name: string
  price: number
  src: string
}
export interface WatchListItemType {
  id: string
  name: string
  image: string
  value: string
  graphData: GraphPlotData
  trendValue: number
}

export interface userDataType {
  id: string
  name: string
  email: string
  password: string
  balance: number
}

export type TypographyVariant = MuiTypographyVariant | 'caption2'

export interface TransactionData {
  id: string
  date: string
  status: string
  type: string
  price: number
  quantity: number
  description: string
  user: User
  crypto: CryptoData
}

export interface CryptoData {
  id: string
  name: string
  symbol: string
  icon: string
  price: number
  change: number
  marketCap: number
  volume: number
  circulatingSupply: number
}
