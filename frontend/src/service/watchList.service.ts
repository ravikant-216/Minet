import { getWatchListByUserId } from '@/api/api'
import { formatCurrency } from '@/utils/functions'
import { DashBoardWatchListItem, WatchListItemType } from '@/utils/types'

const getDashBoardWatchList = async (
  userId: string
): Promise<WatchListItemType[] | undefined> => {
  try {
    const res = await getWatchListByUserId(userId)
    const data = res.data as DashBoardWatchListItem[]
    return data.map((value) => {
      return {
        id: value.id,
        name: value.crypto.name,
        image: value.crypto.icon,
        value: `${formatCurrency.format(value.crypto.price)}`,
        graphData: {
          name: value.crypto.name,
          data: [0, 100, 50, 75, 75, 150, 10, 100, 140],
        },
        trendValue: value.crypto.change,
      }
    })
  } catch (err) {
    console.error(err)
  }
}

export default {
  getDashBoardWatchList,
}
