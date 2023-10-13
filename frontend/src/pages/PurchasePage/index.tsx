/* eslint-disable prettier/prettier */
import AccountDetailCard from '@/components/molecules/AccountDetailCard'
import PaymentMethodSelectCard from '@/components/molecules/PaymentMethodSelectCard'
import SelectDeliveryOption from '@/components/molecules/SelectDeliveryOptionCard'
import CryptoSelectCard from '@/components/organisms/CryptoSelectCard'
import PaymentCardComponent from '@/components/organisms/PaymentSummaryCard'
import DashBoardTemplate from '@/components/templates/DashBoardTemplate'
import coinService from '@/service/coin.service'
import { PaymentOptions, TRANSACTION_FREE_AMOUNT } from '@/strings/constant'
import { Stack, Typography } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CryptoDetailType, User, Wallet } from '@/utils/types'
import { MyPortfolioCardProps } from '@/components/molecules/MyPortfolioCard'
import { formatCurrency } from '@/utils/functions'
import walletService from '@/service/wallet.service'
import transactionService from '@/service/transaction.service'

interface PurchaseScreenProps {
  user: User
}

const PurchagePage = ({ user }: PurchaseScreenProps) => {
  const [coins, setCoins] = useState<CryptoDetailType[]>([])
  const [usdWallet, setUsdWallet] = useState<Wallet | undefined>()
  const [sliderValue, setSliderValue] = useState(0)

  const [selectCoin, setSelectCoin] = useState<CryptoDetailType | undefined>(
    undefined
  )

  const fetchData = useCallback(async () => {
    const fetchAllCoins = await coinService.fetchAllCoins(true)
    if (fetchAllCoins) {
      setCoins(fetchAllCoins)
      setSelectCoin(fetchAllCoins[0])
    }
    const usdWalletData = await walletService.fetchUserUsbWallletData(user.id)
    if (usdWalletData) {
      setUsdWallet(usdWalletData)
      setSliderValue(usdWalletData.totalBalance / 2)
    }
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

  const quantity = sliderValue / (selectCoin?.price as number)

  const handleOnSelect = (index: number) => {
    setSelectCoin(coins[index])
  }

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
  }

  const handleCreateNewTransaction = async () => {
    if (sliderValue > 0) {
      await transactionService.createNewTransaction({
        date: new Date().toString(),
        type: 'Purchased',
        user: user,
        price: sliderValue,
        crypto: selectCoin as CryptoDetailType,
        status: 'success',
        quantity,
        description: 'From Badgley',
      })
      //After new transaction we will redirected to succressful page
    }
  }

  return (
    <DashBoardTemplate title="Checkout" isButton={false}>
      <Stack direction="row">
        <Stack gap={6} mx={6} my={6} flex={1}>
          <Stack gap={3}>
            <Typography variant="subtitle1">Buy Crypto</Typography>
            <CryptoSelectCard
              onClick={handleOnSelect}
              cards={CrypotoSelectItems}
              sx={{ width: '100%' }}
            />
          </Stack>
          <PaymentMethodSelectCard
            title="Payment Method"
            paymentOptions={PaymentOptions}
          />
          <AccountDetailCard
            isBuy={true}
            userBalance={`${formatCurrency.format(
              (usdWallet?.totalBalance as number) - TRANSACTION_FREE_AMOUNT
            )}`}
            sliderMaxValue={
              (usdWallet?.totalBalance as number) - TRANSACTION_FREE_AMOUNT
            }
            sliderValue={`1${
              selectCoin?.symbol as string
            } = ${formatCurrency.format(selectCoin?.price as number)}`}
            crypto="0.0234510 "
            label={selectCoin?.symbol as string}
            onSliderChange={handleSliderChange}
          />
          <SelectDeliveryOption
            isOpen={false}
            coinType={selectCoin?.name as string}
            transactionFees={`Transaction fees : 0.005 ${
              selectCoin?.symbol as string
            }`}
          />
        </Stack>
        <Stack
          width="500px"
          borderLeft="1px solid #E5E5E5"
          borderBottom="1px solid #E5E5E5"
          borderRadius={1}
          height="fit-content"
        >
          <PaymentCardComponent
            type="buy"
            buyValue={quantity}
            cryptoPrice={selectCoin?.price ?? 3406069.54}
            symbol={selectCoin?.symbol ?? 'BTC'}
            transactionFee={1000.0}
            cryptoCoin={selectCoin?.name ?? 'Bitcoin'}
            deliveryFee={'0.005'}
            onButtonClick={handleCreateNewTransaction}
          />
        </Stack>
      </Stack>
    </DashBoardTemplate>
  )
}

export default PurchagePage
