import { getUsbWalletDetailsByUserId, getWalletByUserId } from '@/api/api'
import { Wallet } from '@/utils/types'

const fetchUserUsbWallletData = async (userId: string) => {
  try {
    const res = await getUsbWalletDetailsByUserId(userId)
    return res.data[0] as Wallet
  } catch (err) {
    console.error(err)
  }
}

const fetchAlllWalletByUserId = async (userId: string) => {
  try {
    const res = await getWalletByUserId(userId)
    return res.data as Wallet[]
  } catch (err) {
    console.error(err)
  }
}

export default {
  fetchUserUsbWallletData,
  fetchAlllWalletByUserId,
}
