import { getAllTransactionByUserId } from '@/api/api'
import { RecentTransactionType, TransactionData } from '@/utils/types'

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

export default {
  fetchAllTransaction: fetchAllTransactionByUserId,
}
