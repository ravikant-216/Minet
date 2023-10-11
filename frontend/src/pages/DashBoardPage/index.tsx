/* eslint-disable react-hooks/exhaustive-deps */
import CurrencySelection from '@/components/molecules/CurrencySelection'
import MyPortfolioWallet from '@/components/molecules/MyPortfolioWallet'
import DashBoardWatchList from '@/components/organisms/DashBoardWatchList'
import MyPortfolio from '@/components/organisms/MyPortfolio'
import DashBoardTemplate from '@/components/templates/DashBoardTemplate'
import InfoIcon from '@Assets/icons/infoIcon.svg'
import { CLICK_ONCURRENCY, MOCK_DATA_ONE } from '@/strings/constant'
import { Stack, Typography, useTheme } from '@mui/material'
import Image from '@/components/atoms/Image'
import { useCallback, useEffect, useState } from 'react'
import watchListService from '@/service/watchList.service'
import {
  CryptoDetailType,
  RecentTransactionType,
  User,
  WatchListItemType,
} from '@/utils/types'
import coinService from '@/service/coin.service'
import transactionService from '@/service/transaction.service'

interface DashBoardPageProps {
  user: User
}

const DashBoardPage = ({ user }: DashBoardPageProps) => {
  const [watchListItem, setWatchListItem] = useState<WatchListItemType[]>([])
  const [coins, setCoins] = useState<CryptoDetailType[]>([])
  const [recentTransactions, setRecentTransactions] = useState<
    RecentTransactionType[]
  >([])

  const theme = useTheme()

  const fetchData = useCallback(async () => {
    const res = await watchListService.getDashBoardWatchList(user.id)
    setWatchListItem(res ?? [])

    const coinDetails = await coinService.fetchAllCoins()
    setCoins(coinDetails)

    const transactions = await transactionService.fetchAllTransaction(user.id)
    setRecentTransactions(transactions ?? [])
  }, [user])

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <DashBoardTemplate title="Dashboard" isButton={true}>
      <Stack direction="row" px={2} height="100%">
        <Stack p={2} width="70%">
          <DashBoardWatchList items={watchListItem} />
          <MyPortfolio
            {...MOCK_DATA_ONE}
            series={user.isNewUser ? undefined : MOCK_DATA_ONE.series}
          />
          {!user.isNewUser && (
            <>
              <Stack direction="row" justifyContent="space-between" mt={3}>
                <Typography variant="body1">
                  {coins.length} coins (3 active)
                </Typography>
                <Stack direction="row" alignItems="center">
                  <Image src={InfoIcon} alt="info" />
                  <Typography variant="caption2">{CLICK_ONCURRENCY}</Typography>
                </Stack>
              </Stack>
              <Stack>
                <CurrencySelection stackProps={{ mt: 4 }} />
              </Stack>
            </>
          )}
        </Stack>
        <Stack width="30%">
          <MyPortfolioWallet
            sx={{
              backgroundColor: theme.palette.gamma.GREY_WHITE,
              borderLeft: `1px solid ${theme.palette.gamma.GREY_100}`,
            }}
            height="100%"
            width="100%"
            totalBalance={user.balance}
            coins={coins}
            usdWalletBalance={user.balance}
            recentTransactions={recentTransactions}
          />
        </Stack>
      </Stack>
    </DashBoardTemplate>
  )
}

export default DashBoardPage
