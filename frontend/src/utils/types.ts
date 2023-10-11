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

export interface Transacton {
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

export type TypographyVariant = MuiTypographyVariant | 'caption2'
