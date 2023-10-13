import { getAllCoins } from '@/api/api'
import { CryptoDetailType } from '@/utils/types'

const fetchAllCoins = async (isExludeUsdCoin = false) => {
  try {
    const res = await getAllCoins()
    const data = res.data as CryptoDetailType[]

    if (isExludeUsdCoin) {
      return data.filter((data) => data.symbol !== 'USDC')
    }
    return data
  } catch (err) {
    console.error(err)
  }
}

export default {
  fetchAllCoins,
}
