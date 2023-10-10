const GET_ALL_COINS = '/crypto'
const GET_USER_BY_EMAIL_AND_PASSWORD = (email: string, password: string) =>
  `/users?email=${email}&password=${password}`

export default {
  GET_ALL_COINS,
  GET_USER_BY_EMAIL_AND_PASSWORD,
}
