const GET_ALL_COINS = '/crypto'
const GET_USER_BY_EMAIL_AND_PASSWORD = (email: string, password: string) =>
  `/users?email=${email}&password=${password}`
const ADD_USER = '/users'
const UPDATE_PASSWORD = (userId: string) => `/users/${userId}`
const GET_USER_BY_EMAIL = (email: string) => `/users?email=${email}`

export default {
  GET_ALL_COINS,
  GET_USER_BY_EMAIL_AND_PASSWORD,
  ADD_USER,
  UPDATE_PASSWORD,
  GET_USER_BY_EMAIL,
}
