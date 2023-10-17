import { useEffect, useState } from 'react'
import Image from '@/components/atoms/Image'
import TypographyLabel from '@/components/atoms/TypographyLabel'
import CurrencyDetailWallet from '@/components/organisms/CurrencyDetailWallet'
import { WALLET, CASH_DEPOSIT, WITHDRAWAL } from '@/strings/constant'
import theme from '@/theme'
import { Stack, Typography, styled } from '@mui/material'
import DollarIcon from '@Assets/icons/dollarBlue.svg'
import ButtonComponent from '@/components/atoms/Button'
import DashBoardTemplate from '@/components/templates/DashBoardTemplate'
import transactionService from '@/service/recentTransaction.service'
import { Transaction } from '@/utils/types'
import { useAuthContext } from '@/context/AuthContext'

const StyleStack = styled(Stack)({
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
  borderRadius: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
  padding: theme.spacing(6),
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.gamma.GREY_WHITE,
})
const BodyContainer = styled(Stack)({
  padding: theme.spacing(6),
  gap: theme.spacing(6),
})
const StyleButton = styled(ButtonComponent)({
  border: `1px solid ${theme.palette.primary[500]}`,
  borderRadius: theme.spacing(1),
  padding: `0 ${theme.spacing(4)}`,
})

const CashWalletScreen = () => {
  const [transaction, setTransaction] = useState<Transaction[]>([])
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await transactionService.fetchAllTransactions(
          user?.id as string
        )
        setTransaction(response as Transaction[])
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [user])
  return (
    <DashBoardTemplate title={'Trade'} isButton={true}>
      <BodyContainer>
        <StyleStack>
          <Stack gap={theme.spacing(8.25)} direction={'row'}>
            <Image
              src={DollarIcon}
              alt="dollar-image"
              imageProps={{
                width: theme.spacing(14),
                height: theme.spacing(14),
              }}
            />
            <TypographyLabel
              label1={'USD Coin'}
              label2={'Cash'}
              label1Variant="heading6"
              label2Variant="body1"
            />
          </Stack>
          <Stack gap={theme.spacing(3)} direction={'row'}>
            <StyleButton
              typographyVarient="button"
              label={CASH_DEPOSIT}
              variant="outlined"
            />
            <StyleButton
              typographyVarient="button"
              label={WITHDRAWAL}
              variant="outlined"
            />
          </Stack>
        </StyleStack>
        <Stack>
          <Typography
            variant="subtitle2"
            color={theme.palette.text.highEmphasis}
          >
            {WALLET}
          </Typography>
          <CurrencyDetailWallet
            transactions={transaction}
            data-testid="currency-detail"
            textAlign="right"
            totalBalance="0.0234510 BTC ($85,553.73)"
          />
        </Stack>
      </BodyContainer>
    </DashBoardTemplate>
  )
}

export default CashWalletScreen
