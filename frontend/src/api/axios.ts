/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'
import { BASE_URL } from '@/strings/env'

const apiClient = axios.create({
  baseURL: BASE_URL,
})

export default apiClient
