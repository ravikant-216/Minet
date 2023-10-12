import {
  CryptoData,
  Transaction,
  TransactionData,
  WatchlistData,
} from './types'

export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const formatTransactions = (transactionsData: TransactionData[]) => {
  let tempCryptoQuantitySum = 0
  let tempTransactionPriceSum = 0

  const formattedTransactions = transactionsData.map(
    (transaction: TransactionData) => {
      tempCryptoQuantitySum += transaction.quantity
      tempTransactionPriceSum += transaction.price

      return {
        amount: transaction.quantity,
        cryptoType: {
          id: transaction.crypto.id,
          image: transaction.crypto.icon,
          name: transaction.crypto.name,
          price: transaction.price.toString(),
          sign: transaction.crypto.symbol,
        },
        date: transaction.date,
        id: transaction.id,
        status: transaction.status.toLowerCase() as Transaction['status'],
        transactionType:
          transaction.type.toLowerCase() as Transaction['transactionType'],
        user: transaction.user,
      }
    }
  )

  return {
    formattedTransactions,
    tempCryptoQuantitySum,
    tempTransactionPriceSum,
  }
}

export const formatCryptoData = ({
  cryptoData,
  watchlistData,
}: {
  cryptoData: CryptoData[]
  watchlistData: WatchlistData[]
}) => {
  return cryptoData.map((crypto) => {
    const isOnWatchlist = watchlistData.some(
      (watchlistItem) => watchlistItem.crypto.id === crypto.id
    )

    return {
      change: crypto.change,
      checked: isOnWatchlist,
      id: crypto.id,
      label: crypto.symbol,
      marketCap: crypto.marketCap,
      name: crypto.name,
      price: crypto.price,
      src: crypto.icon,
    }
  })
}
