import { TransactionData, Wallet, WatchlistData } from '@/utils/types'
import api_routes from './api_routes'
import apiClient from './axios'

export const getAllCoins = () => {
  return apiClient.get(api_routes.GET_ALL_COINS)
}

export const checkUser = (email: string, password: string) => {
  return apiClient.get(
    api_routes.GET_USER_BY_EMAIL_AND_PASSWORD(email, password)
  )
}

export const getAllTransactionByUserId = (userId: string) => {
  return apiClient.get(api_routes.GET_ALL_TRANSACTION_BY_USERID(userId))
}

export const getWatchListByUserId = (userId: string) => {
  return apiClient.get(api_routes.GET_WATCHLIST_BY_USER_ID(userId))
}

export const addUser = (name: string, email: string, password: string) => {
  return apiClient.post(api_routes.ADD_USER, {
    name: name,
    email: email,
    password: password,
    balance: 50000,
  })
}

export const updatePassword = (newPassword: string, userId: string) => {
  return apiClient.patch(api_routes.UPDATE_PASSWORD(userId), {
    password: newPassword,
  })
}
export const checkUserByEmail = (email: string) => {
  return apiClient.get(api_routes.GET_USER_BY_EMAIL(email))
}
export const getAllTransactions = () => {
  return apiClient.get(api_routes.GET_ALL_TRANSACTIONS)
}

export const getUserById = (id: string) => {
  return apiClient.get(api_routes.GET_USER_BY_ID(id))
}

export const getCryptoById = (id: string) => {
  return apiClient.get(api_routes.GET_CRYPTO_BY_ID(id))
}

export const getAllTransactionsByCryptoId = (cryptoId: string) => {
  return apiClient.get(api_routes.GET_ALL_TRANSACTIONS_BY_CRYPTO_ID(cryptoId))
}

export const getAllTransactionsByUserId = (id: string) => {
  return apiClient.get(api_routes.GET_ALL_TRANSACTION_BY_USERID(id))
}
export const getWatchlistDataByUserId = (userId: string) => {
  return apiClient.get(api_routes.GET_WATCHLISTDATA_BY_USER_ID(userId))
}

export const deleteWatchlistById = (watchListId: string) => {
  return apiClient.delete(api_routes.GET_WATCHLIST_BY_ID(watchListId))
}

export const addWatchlist = (watchListData: Partial<WatchlistData>) => {
  return apiClient.post(api_routes.WATCHLIST, watchListData)
}

export const getUsbWalletDetailsByUserId = (userId: string) => {
  return apiClient.get(api_routes.GET_USD_WALLET_BY_USER_ID(userId))
}

export const getWalletByCoinId = (coinId: string) => {
  return apiClient.get(api_routes.GET_WALLET_BY_COIN_ID(coinId))
}

export const createWallet = (data: Omit<Wallet, 'id'>) => {
  return apiClient.post(api_routes.WALLET, data)
}

export const createTransaction = (data: Omit<TransactionData, 'id'>) => {
  return apiClient.post(api_routes.TRANSACTION, data)
}

export const updateWallet = (walletId: string, data: Partial<Wallet>) => {
  return apiClient.patch(api_routes.GET_WALLET_BY_ID(walletId), data)
}
