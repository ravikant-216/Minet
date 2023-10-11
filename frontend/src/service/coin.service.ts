import { getAllCoins } from '@/api/api'
import { CryptoDetailType } from '@/utils/types'

const fetchAllCoins = async () => {
  const res = await getAllCoins()
  return res.data as CryptoDetailType[]
}

export default {
  fetchAllCoins,
}
