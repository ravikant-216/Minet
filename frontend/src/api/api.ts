import {
  AddToWatchListBody,
  CreateTransactionBody,
  UpdateWalletRequestBody,
  User,
  Wallet,
  WalletPostData,
} from '@/utils/types'
import api_routes from './api_routes'
import apiClient from './axios'

export const getAllCoins = () => {
  return apiClient.get(api_routes.GET_ALL_COINS)
}

export const checkUser = async (email: string, password: string) => {
  try {
    const res = await apiClient.post(
      api_routes.GET_USER_BY_EMAIL_AND_PASSWORD,
      {
        email: email,
        password: password,
      }
    )
    if (res.data) {
      localStorage.setItem('token', res.data)
      return checkUserByEmail(email)
    }
  } catch (error) {
    console.error('Error while checking user:', error)
  }
  return false
}

export const getAllTransactionByUserId = (userId: string) => {
  return apiClient.get(api_routes.GET_ALL_TRANSACTION_BY_USERID(userId))
}

export const getWatchListByUserId = (userId: string) => {
  return apiClient.get(api_routes.GET_WATCHLIST_BY_USER_ID(userId))
}

export const addUser = async (
  name: string,
  email: string,
  password: string
) => {
  const newUserResponse = await apiClient.post(api_routes.ADD_USER, {
    name: name,
    email: email,
    password: password,
  })

  const data = {
    userId: newUserResponse.data.id,
    cryptoId: 'c9cac812-7326-11ee-9753-fe98efe3f5a2',
    totalBalance: 50000,
  }

  await createWallet(data)
  return newUserResponse.data as User
}

export const addAuthUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const userResponse = await checkUserByEmail(email)

    if (userResponse.data) {
      const user = userResponse.data as User
      await checkUser(email, password)
      localStorage.setItem('user', JSON.stringify(user))
      return user
    }
  } catch {
    const newUserResponse = await addUser(name, email, password)
    await checkUser(email, password)
    localStorage.setItem('user', JSON.stringify(newUserResponse))
    return newUserResponse
  }
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

export const addWatchlist = (watchListData: AddToWatchListBody) => {
  return apiClient.post(api_routes.WATCHLIST, watchListData)
}

export const getUsbWalletDetailsByUserId = (userId: string) => {
  return apiClient.get(api_routes.GET_USD_WALLET_BY_USER_ID(userId))
}

export const updateUsdWallet = (userId: string, data: Partial<Wallet>) => {
  return apiClient.post(api_routes.GET_USD_WALLET_BY_USER_ID(userId), data)
}

export const getWalletByCoinId = (coinId: string) => {
  return apiClient.get(api_routes.GET_WALLET_BY_COIN_ID(coinId))
}

export const getWalletByUserIdCoinId = (coinId: string, userId: string) => {
  return apiClient.get(
    api_routes.GET_WALLET_BY_USER_ID_AND_CRYPTO_ID(userId, coinId)
  )
}

export const createWallet = (data: Omit<WalletPostData, 'id'>) => {
  return apiClient.post(api_routes.WALLET, data)
}

export const createTransaction = (data: CreateTransactionBody) => {
  return apiClient.post(api_routes.TRANSACTION, data)
}

export const updateWallet = (data: UpdateWalletRequestBody) => {
  return apiClient.patch(api_routes.WALLET, data)
}

export const getWalletByUserId = (userId: string) => {
  return apiClient.get(api_routes.GET_WALLET_BY_USER_ID(userId))
}
