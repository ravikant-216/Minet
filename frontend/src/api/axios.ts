/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'
import { BASE_URL } from '@/strings/env'

const apiClient = axios.create({
  baseURL: BASE_URL,
})

apiClient.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default apiClient
