/* eslint-disable react-hooks/exhaustive-deps */
import { user } from '@/__mocks__/index'
import {
  addWatchlist,
  deleteWatchlistById,
  getAllCoins,
  getWatchlistDataByUserId,
} from '@/api/api'
import SearchTradeTable from '@/components/organisms/SearchTradeTable'
import DashBoardTemplate from '@/components/templates/DashBoardTemplate'
import theme from '@/theme'
import { formatCryptoData } from '@/utils/functions'
import { CryptoData, TradeData, User, WatchlistData } from '@/utils/types'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StyledBox = styled(Box)({
  padding: theme.spacing(6),
  borderLeft: `1px solid ${theme.palette.gamma.GREY_100}`,
  background: theme.palette.gamma.GREY_WHITE,
  height: '100%',
})
const TradePageComponent = ({ user }: { user: User }) => {
  const [formattedCryptoData, setFormattedCryptoData] = useState<TradeData[]>(
    []
  )
  const [watchlistData, setWatchlistData] = useState<WatchlistData[]>([])
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])

  const navigate = useNavigate()

  const fetchData = async (userId: string) => {
    try {
      const cryptoRes = await getAllCoins()
      const watchlistRes = await getWatchlistDataByUserId(userId)
      setWatchlistData(watchlistRes.data as WatchlistData[])
      const cryptoData: CryptoData[] = cryptoRes.data
      setCryptoData(cryptoData)
      const watchlistData: WatchlistData[] = watchlistRes.data
      const formattedCryptoData: TradeData[] = formatCryptoData({
        cryptoData: cryptoData,
        watchlistData: watchlistData,
      })
      setFormattedCryptoData(formattedCryptoData)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData(user.id)
  }, [user.id])

  const handleStarIconClick = async (id: string, checked: boolean) => {
    if (checked) {
      const find = watchlistData.find((val) => val.crypto.id === id)
      if (find) deleteWatchlistById(find.id)
    } else {
      const findCrypto = cryptoData.find((data) => data.id === id)
      if (findCrypto) {
        addWatchlist({
          crypto: findCrypto,
          user: user,
        })
      }
    }
    fetchData(user.id)
  }

  const onCardClick = (id: string) => {
    navigate(`/detail/${id}`)
  }

  return (
    <StyledBox>
      <SearchTradeTable
        onCardClick={onCardClick}
        tradeTableData={formattedCryptoData}
        watchListData={formattedCryptoData.filter((t) => t.checked)}
        onStarIconClick={handleStarIconClick}
      />
    </StyledBox>
  )
}
const TradePage = () => {
  return (
    <DashBoardTemplate isButton={true} title={'Tarde'}>
      <TradePageComponent user={user} />
    </DashBoardTemplate>
  )
}

export default TradePage
