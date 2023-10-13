import { getAllTransactionByUserId } from '@/api/api'
import { RECEIVED } from '@/strings/constant'
import { Transaction, TransactionData } from '@/utils/types'

const fetchAllTransactionByUserId = async (
  userId: string
): Promise<Transaction[] | undefined> => {
  try {
    const res = await getAllTransactionByUserId(userId)
    const data = res.data as TransactionData[]
    return data.map((trans) => ({
      id: trans.id,
      date: trans.date,
      transactionType: trans.type === 'Purchased' ? 'buy' : 'sold',
      cryptoType: {
        id: trans.crypto.id,
        name: RECEIVED + trans.crypto.name,
        image: trans.crypto.icon,
        price: trans.crypto.price.toString(),
        sign: trans.crypto.symbol,
      },
      amount: trans.quantity,
      status: trans.status,
      user: trans.user,
    }))
  } catch (err) {
    console.log(err)
  }
}

export default {
  fetchAllTransactions: fetchAllTransactionByUserId,
}
