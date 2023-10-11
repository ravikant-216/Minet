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
