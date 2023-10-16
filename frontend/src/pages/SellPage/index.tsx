/* eslint-disable prettier/prettier */
import AccountDetailCard from '@/components/molecules/AccountDetailCard'
import CryptoSelectCard from '@/components/organisms/CryptoSelectCard'
import PaymentCardComponent from '@/components/organisms/PaymentSummaryCard'
import DashBoardTemplate from '@/components/templates/DashBoardTemplate'
import coinService from '@/service/coin.service'
import {
  DEPOSIT_TO,
  SELL_CRYPTO_CAMEL,
  TOTAL_BALANCE,
} from '@/strings/constant'
import { Stack, Typography } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CryptoDetailType, User, Wallet } from '@/utils/types'
import { MyPortfolioCardProps } from '@/components/molecules/MyPortfolioCard'
import { formatCurrency } from '@/utils/functions'
import transactionService from '@/service/transaction.service'
import BalanceCard from '@/components/molecules/BalanceCard'
import UsdLogo from '@Assets/icons/UsdCoin.svg'
import theme from '@/theme'
import walletService from '@/service/wallet.service'
import { useNavigate } from 'react-router-dom'

interface SellPageProps {
  user: User
}

const SellPage = ({ user }: SellPageProps) => {
  const [coins, setCoins] = useState<CryptoDetailType[]>([])
  const [sellSliderValue, setSellSliderValue] = useState(0)
  const [wallets, setWallets] = useState<Wallet[]>([])
  const navigate = useNavigate()

  const [currentSelectedCoin, setCurrentSelectedCoin] = useState<
    CryptoDetailType | undefined
  >(undefined)

  const currentSelectedWallet = useMemo(() => {
    return wallets.find((data) => data.crypto.id === currentSelectedCoin?.id)
  }, [currentSelectedCoin, wallets])

  const fetchData = useCallback(async () => {
    const fetchAllCoins = await coinService.fetchAllCoins(true)
    if (fetchAllCoins) {
      setCoins(fetchAllCoins)
      setCurrentSelectedCoin(fetchAllCoins[0])
    }
    const wallets = await walletService.fetchAlllWalletByUserId(user.id)
    if (wallets) setWallets(wallets)
  }, [user])

  const CrypotoSelectItems = useMemo((): MyPortfolioCardProps[] => {
    return coins.map((data) => ({
      label: data.name,
      subLabel: formatCurrency.format(data.price),
      icon: data.icon,
    }))
  }, [coins])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const quantity = sellSliderValue

  const handleOnSelect = (index: number) => {
    setCurrentSelectedCoin(coins[index])
  }

  const handleSliderChange = (value: number) => {
    setSellSliderValue(value)
  }

  const handleCreateSellTransaction = async () => {
    if (sellSliderValue > 0) {
      const sellTransaction = await transactionService.createNewTransaction({
        date: new Date().toString(),
        type: 'Sold',
        user: user,
        price: sellSliderValue * (currentSelectedCoin?.price as number),
        crypto: currentSelectedCoin as CryptoDetailType,
        status: 'success',
        quantity,
        description: 'From Leslie Alexander',
      })
      if (sellTransaction)
        navigate("/success", {
          state: {
            transaction: sellTransaction
          }
        })
    }
  }

  return (
    <DashBoardTemplate title="Checkout" isButton={false}>
      <Stack direction="row">
        <Stack
          sx={{
            padding: 6,
          }}
          gap={6}
          flex={1}
        >
          <Stack gap={3}>
            <Typography variant="subtitle1">{SELL_CRYPTO_CAMEL}</Typography>
            <CryptoSelectCard
              onClick={handleOnSelect}
              cards={CrypotoSelectItems}
              sx={{ width: '100%' }}
            />
          </Stack>
          <BalanceCard
            title={TOTAL_BALANCE}
            detail={`${currentSelectedWallet?.totalBalance ?? 0} ${currentSelectedCoin?.symbol
              }`}
            logo={currentSelectedCoin?.icon as string}
            name={currentSelectedCoin?.name as string}
            detailVariant="subtitle1"
            detailColor={theme.palette.text.highEmphasis}
          />
          <AccountDetailCard
            isBuy={true}
            userBalance={`${currentSelectedWallet?.totalBalance ?? 0} ${currentSelectedCoin?.symbol
              }`}
            sliderMaxValue={currentSelectedWallet?.totalBalance ?? 0}
            sliderValue={`1${currentSelectedCoin?.symbol as string
              } = ${formatCurrency.format(currentSelectedCoin?.price as number)}`}
            crypto={`${currentSelectedWallet?.totalBalance ?? 0}`}
            label={currentSelectedCoin?.symbol as string}
            onSliderChange={handleSliderChange}
          />
          <BalanceCard
            title={DEPOSIT_TO}
            detail="Default"
            logo={UsdLogo}
            name="USD Coin (Cash)"
            detailVariant="caption"
            detailColor={theme.palette.text.mediumEmphasis}
          />
        </Stack>
        <Stack
          width="500px"
          borderLeft={`1px solid ${theme.palette.gamma.GREY_100}`}
          borderBottom={`1px solid ${theme.palette.gamma.GREY_100}`}
          borderRadius={1}
          height="fit-content"
        >
          <PaymentCardComponent
            type="sell"
            buyValue={quantity}
            cryptoPrice={currentSelectedCoin?.price ?? 3406069.54}
            symbol={currentSelectedCoin?.symbol ?? 'BTC'}
            transactionFee={1000.0}
            cryptoCoin={'BitCoin'}
            deliveryFee={'0.005'}
            onButtonClick={handleCreateSellTransaction}
          />
        </Stack>
      </Stack>
    </DashBoardTemplate>
  )
}

export default SellPage
