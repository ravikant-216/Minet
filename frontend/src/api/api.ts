import api_routes from './api_routes'
import apiClient from './axios'

export const getAllCoins = () => {
  return apiClient.get(api_routes.GET_ALL_COINS)
}
