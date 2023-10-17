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
  Wallet,
  WatchListItemType,
} from '@/utils/types'
import coinService from '@/service/coin.service'
import transactionService from '@/service/transaction.service'
import { useNavigate } from 'react-router-dom'
import walletService from '@/service/wallet.service'
import { useAuthContext } from '@/context/AuthContext'

const DashBoardPage = () => {
  const [watchListItem, setWatchListItem] = useState<WatchListItemType[]>([])
  const [coins, setCoins] = useState<CryptoDetailType[]>([])
  const [wallets, setWallets] = useState<Wallet[]>([])
  const [recentTransactions, setRecentTransactions] = useState<
    RecentTransactionType[]
  >([])
  const { user } = useAuthContext()

  const navigate = useNavigate()

  const theme = useTheme()

  const fetchData = useCallback(async () => {
    if (!user) {
      return
    }
    const res = await watchListService.getDashBoardWatchList(user.id)
    setWatchListItem(res ?? [])

    const allWallets = await walletService.fetchAlllWalletByUserId(user.id)
    if (allWallets) {
      setWallets(allWallets)
    }

    const coinDetails = await coinService.fetchAllCoins()
    if (coinDetails) setCoins(coinDetails)

    const transactions = await transactionService.fetchAllTransaction(user.id)
    setRecentTransactions(transactions ?? [])
  }, [user])

  const discoverAssetOnClick = () => {
    navigate('/trade')
  }

  const isNewUser = watchListItem.length == 0 && recentTransactions.length == 0

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <DashBoardTemplate title="Dashboard" isButton={true}>
      <Stack direction="row" px={2} height="100%">
        <Stack p={2} width="70%">
          <DashBoardWatchList
            discoverAssetOnClick={discoverAssetOnClick}
            items={watchListItem}
          />
          <MyPortfolio
            {...MOCK_DATA_ONE}
            series={isNewUser ? undefined : MOCK_DATA_ONE.series}
          />
          {!isNewUser && (
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
            wallets={wallets}
            height="100%"
            width="100%"
            coins={coins}
            recentTransactions={recentTransactions}
          />
        </Stack>
      </Stack>
    </DashBoardTemplate>
  )
}

export default DashBoardPage
