import {
  createTransaction,
  createWallet,
  getAllTransactionByUserId,
  getUsbWalletDetailsByUserId,
  getWalletByUserIdCoinId,
  updateWallet,
} from '@/api/api'
import { RecentTransactionType, TransactionData, Wallet } from '@/utils/types'

const fetchAllTransactionByUserId = async (
  userId: string
): Promise<RecentTransactionType[] | undefined> => {
  try {
    const res = await getAllTransactionByUserId(userId)
    const data = res.data as TransactionData[]
    return data.map((value) => {
      return {
        id: value.id,
        cryptoName: value.crypto.name,
        transactionDate: new Date(value.date),
        transactionType: value.type,
        cryptoAmount: `${value.type.toLowerCase() === 'sold' ? '-' : '+'}${
          value.quantity
        } ${value.crypto.symbol}`,
        dollarAmount: `+${value.price}`,
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const createNewTransaction = async (data: Omit<TransactionData, 'id'>) => {
  try {
    const wallet = await getWalletByUserIdCoinId(data.crypto.id, data.user.id)
    const usdWalletRequest = await getUsbWalletDetailsByUserId(data.user.id)
    const usdWallet = usdWalletRequest.data[0] as Wallet
    const resData = wallet.data as Wallet[]
    let currentWalllet: Wallet | undefined = undefined
    if (resData.length === 0) {
      const response = await createWallet({
        userId: data.user.id,
        cryptoId: data.crypto.id,
        totalBalance: data.quantity,
      })
      currentWalllet = response.data as Wallet
    } else {
      currentWalllet = resData[0]
    }
    if (data.type === 'Purchased') {
      await Promise.all([
        updateWallet({
          cryptoId: usdWallet.crypto.id,
          userId: data.user.id,
          id: currentWalllet.id,
          totalBalance: currentWalllet.totalBalance + data.quantity,
        }),
        updateWallet({
          cryptoId: usdWallet.crypto.id,
          userId: data.user.id,
          id: usdWallet.id,
          totalBalance: usdWallet.totalBalance - data.price,
        }),
      ])
    } else {
      await Promise.all([
        updateWallet({
          cryptoId: data.crypto.id,
          userId: data.user.id,
          id: currentWalllet.id,
          totalBalance: currentWalllet.totalBalance - data.quantity,
        }),
        updateWallet({
          cryptoId: data.crypto.id,
          userId: data.user.id,
          id: usdWallet.id,
          totalBalance: usdWallet.totalBalance + data.price,
        }),
      ])
    }
    const transaction = await createTransaction({
      price: data.price,
      userId: data.user.id,
      cryptoId: data.crypto.id,
      type: data.type === 'Sold' ? 'sold' : 'buy',
      quantity: data.quantity,
      status: data.status,
      description: data.description,
    })
    return transaction.data as TransactionData
  } catch (error) {
    console.error(error)
  }
}

export default {
  fetchAllTransaction: fetchAllTransactionByUserId,
  createNewTransaction,
}
