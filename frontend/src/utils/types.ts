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
  id: number
  name: string
  src: string
  label: string
  price: number
  change: string
  marketCap: number
  checked: boolean
}
