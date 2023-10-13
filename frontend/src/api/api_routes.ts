const GET_ALL_COINS = '/crypto'
const WATCHLIST = '/watchlist'
const TRANSACTION = '/transactions'
const WALLET = '/wallet'
const GET_USER_BY_EMAIL_AND_PASSWORD = (email: string, password: string) =>
  `/users?email=${email}&password=${password}`
const ADD_USER = '/users'
const UPDATE_PASSWORD = (userId: string) => `/users/${userId}`
const GET_USER_BY_EMAIL = (email: string) => `/users?email=${email}`
const GET_ALL_TRANSACTIONS = '/transactions'
const GET_ALL_TRANSACTIONS_BY_CRYPTO_ID = (cryptoId: string) =>
  `/transactions?cryptoId=${cryptoId}`
const GET_WATCHLIST_BY_USER_ID = (userId: string) =>
  `/watchlist?user.id=${userId}`

const GET_ALL_TRANSACTION_BY_USERID = (userId: string) =>
  `/transactions?user.id=${userId}`

const GET_USER_BY_ID = (id: string) => `/users/${id}`
const GET_CRYPTO_BY_ID = (id: string) => `/crypto/${id}`
const GET_WATCHLISTDATA_BY_USER_ID = (userId: string) =>
  `/watchlist?user.id=${userId}`

const GET_USD_WALLET_BY_USER_ID = (userId: string) =>
  `${WALLET}?user.id=${userId}&crypto.symbol=USDC`

const GET_WALLET_BY_ID = (walletId: string) => {
  return `${WALLET}/${walletId}`
}

const GET_WATCHLIST_BY_ID = (watchListId: string) => `/watchlist/${watchListId}`
const GET_WALLET_BY_COIN_ID = (coinId: string) =>
  `${WALLET}?crypto.id=${coinId}`

const GET_WALLET_BY_USER_ID = (userId: string) => `${WALLET}?user.id=${userId}`

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
  GET_WATCHLIST_BY_USER_ID,
  GET_ALL_TRANSACTION_BY_USERID,
  GET_WATCHLISTDATA_BY_USER_ID,
  GET_WATCHLIST_BY_ID,
  WATCHLIST,
  WALLET,
  TRANSACTION,
  GET_WALLET_BY_ID,
  GET_USD_WALLET_BY_USER_ID,
  GET_WALLET_BY_COIN_ID,
  GET_WALLET_BY_USER_ID,
}
