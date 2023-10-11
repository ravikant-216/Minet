const GET_ALL_COINS = '/crypto'
const GET_USER_BY_EMAIL_AND_PASSWORD = (email: string, password: string) =>
  `/users?email=${email}&password=${password}`
const ADD_USER = '/users'
const UPDATE_PASSWORD = (userId: string) => `/users/${userId}`
const GET_USER_BY_EMAIL = (email: string) => `/users?email=${email}`
const GET_ALL_TRANSACTIONS = '/transactions'
const GET_ALL_TRANSACTIONS_BY_CRYPTO_ID = (cryptoId: string) =>
  `/transactions?cryptoId=${cryptoId}`

const GET_USER_BY_ID = (id: string) => `/users/${id}`
const GET_CRYPTO_BY_ID = (id: string) => `/crypto/${id}`
export default {
  GET_ALL_COINS,
  GET_USER_BY_EMAIL_AND_PASSWORD,
  ADD_USER,
  UPDATE_PASSWORD,
  GET_USER_BY_EMAIL,
  GET_ALL_TRANSACTIONS,
  GET_USER_BY_ID,
  GET_CRYPTO_BY_ID,
  GET_ALL_TRANSACTIONS_BY_CRYPTO_ID,
}
