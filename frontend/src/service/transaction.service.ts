import {
  createTransaction,
  createWallet,
  getAllTransactionByUserId,
  getWalletByCoinId,
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
        cryptoAmount: `${value.type === 'Sold' ? '-' : '+'}${value.quantity} ${
          value.crypto.symbol
        }`,
        dollarAmount: `+${value.price}`,
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const createNewTransaction = async (data: Omit<TransactionData, 'id'>) => {
  try {
    const wallet = await getWalletByCoinId(data.crypto.id)
    const resData = wallet.data as Wallet[]
    if (resData.length === 0) {
      await createWallet({
        user: data.user,
        crypto: data.crypto,
        totalBalance: data.quantity,
      })
    } else {
      await updateWallet(resData[0].id, {
        totalBalance: resData[0].totalBalance + data.quantity,
      })
    }
    const transaction = await createTransaction(data)
    return transaction.data as TransactionData
  } catch (error) {
    console.error(error)
  }
}

export default {
  fetchAllTransaction: fetchAllTransactionByUserId,
  createNewTransaction,
}
