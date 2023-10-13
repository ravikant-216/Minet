import { Divider, styled, Box, Typography, Stack } from '@mui/material'
import theme from '@/theme'
import ButtonComponent from '@Components/atoms/Button'
import TransactionStepper from '@Components/molecules/VerticalStepper'

import {
  BUY_NOW,
  PurchaseEtherium,
  SELL_NOW,
  SellBitcoin,
  TOTOAL,
  TRANSACTION_FEE,
} from '@/strings/constant'
import { formatCurrency } from '@/utils/functions'

export interface PaymentCardProps {
  type: 'sell' | 'buy'
  buyValue: number
  cryptoPrice: number
  symbol: string
  transactionFee: number
  cryptoCoin: string
  deliveryFee: string
  onButtonClick: (totalAmount: number) => void
}

interface TransactionDetailsProps {
  leftValue: string
  rightValue: string
  bold: boolean
}

const RootStack = styled(Stack)({
  backgroundColor: theme.palette.secondary.contrastText,
  borderRadius: theme.spacing(1),
})

const InfoStack = styled(Stack)({
  alignItems: 'center',
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(8),
  borderBottom: `${theme.spacing(0.25)} solid ${theme.palette.divider}`,
})

const StyledBox = styled(Box)({
  padding: theme.spacing(6),
  borderBottom: `${theme.spacing(0.25)} solid ${theme.palette.divider}`,
})

const StyledTransactionDetails = styled(Stack)({
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(17.25),
})

const StyledDivider = styled(Divider)({
  flexGrow: 1,
  border: `${theme.spacing(0.25)} dashed ${theme.palette.divider}`,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
})

const TransactionDetails = (props: TransactionDetailsProps) => {
  const { leftValue, rightValue, bold } = props
  return (
    <Stack
      direction={'row'}
      sx={{
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Typography
        variant={bold ? 'body1' : 'overline'}
        color={theme.palette.text.highEmphasis}
      >
        {leftValue}
      </Typography>
      <StyledDivider />
      <Typography
        variant={bold ? 'body1' : 'overline'}
        color={theme.palette.text.highEmphasis}
      >
        {rightValue}
      </Typography>
    </Stack>
  )
}
const PaymentCardComponent = (props: PaymentCardProps) => {
  const {
    type,
    cryptoPrice,
    symbol,
    cryptoCoin,
    buyValue,
    deliveryFee,
    transactionFee,
    onButtonClick,
  } = props

  const StyledButton = styled(ButtonComponent)({
    padding: theme.spacing(6),
    height: theme.spacing(10.5),
    backgroundColor:
      type === 'buy'
        ? theme.palette.primary[500]
        : theme.palette.gamma.WARNING_300,
    '&:hover': {
      background:
        type === 'buy'
          ? theme.palette.primary[500]
          : theme.palette.gamma.WARNING_300,
    },
  })

  const handleClick = () => {
    const totalAmount = buyValue * cryptoPrice + transactionFee
    onButtonClick(totalAmount)
  }

  return (
    <RootStack direction={'column'}>
      <InfoStack direction={'column'} spacing={3}>
        <Typography
          variant="caption1"
          color={theme.palette.text.mediumEmphasis}
        >
          You are {type}ing
        </Typography>
        <Typography variant="h6" color={theme.palette.text.highEmphasis}>
          {`${buyValue} ${symbol.toUpperCase()}`}
        </Typography>
        <Typography
          variant="caption1"
          color={theme.palette.text.mediumEmphasis}
        >
          1{symbol} = {formatCurrency.format(cryptoPrice)}
        </Typography>
      </InfoStack>
      <StyledBox>
        {type === 'buy' ? (
          <TransactionStepper
            paymentIcon={PurchaseEtherium.paymentIcon}
            paymentValue={PurchaseEtherium.paymentValue}
            depositIcon={PurchaseEtherium.depositIcon}
            depositValue={`${cryptoCoin} Wallet`}
            deleveryFee={`${deliveryFee} ${symbol}`}
            paymentText={PurchaseEtherium.paymentText}
          />
        ) : (
          <TransactionStepper
            paymentIcon={SellBitcoin.paymentIcon}
            paymentValue={`${cryptoCoin} Wallet`}
            depositIcon={SellBitcoin.depositIcon}
            depositValue={SellBitcoin.depositValue}
            deleveryFee={`${deliveryFee} ${symbol}`}
            paymentText={SellBitcoin.paymentText}
          />
        )}
      </StyledBox>
      <Divider />
      <StyledTransactionDetails spacing={4}>
        <TransactionDetails
          leftValue={`${buyValue} ${symbol}`}
          rightValue={formatCurrency.format(buyValue * cryptoPrice)}
          bold={false}
        />
        <TransactionDetails
          leftValue={TRANSACTION_FEE}
          rightValue={formatCurrency.format(transactionFee)}
          bold={false}
        />
        <TransactionDetails
          leftValue={TOTOAL}
          rightValue={formatCurrency.format(
            buyValue * cryptoPrice + transactionFee
          )}
          bold={true}
        />
        <StyledButton
          label={type === 'buy' ? BUY_NOW : SELL_NOW}
          textColor={theme.palette.gamma.GREY_WHITE}
          variant="contained"
          onClick={handleClick}
        />
      </StyledTransactionDetails>
    </RootStack>
  )
}

export default PaymentCardComponent
