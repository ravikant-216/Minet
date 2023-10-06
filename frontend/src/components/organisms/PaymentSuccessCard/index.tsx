import Image from '@/components/atoms/Image'
import theme from '@/theme'
import { styled, Stack, Typography } from '@mui/material'
import success from '@Assets/icons/success.svg'
import ButtonComponent from '@/components/atoms/Button'
import {
  BUY_CRYPTO,
  CRYPTO_WALLET,
  PURCHASE,
  RUPEE_COIN,
  SELL_CRYPTO,
  Sell,
  TRANSACTION_MESSAGE,
  USD_COIN_BUTTON,
} from '@/strings/constant'
const Container = styled(Stack)({
  gap: theme.spacing(11),
  textAlign: 'center',
})

const TypographyContainer = styled(Stack)({
  gap: theme.spacing(2),
  width: theme.spacing(80.5),
})
const ButtonContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(6),
  justifyContent: 'center',
})
const StyleTypography = styled(Typography)({
  color: theme.palette.text.highEmphasis,
})

const StyledButton = styled(ButtonComponent)({
  height: theme.spacing(10.5),
})

interface PaymentSuccessCardProps {
  coinAmount: number
  coinCode: string
  isSell: boolean
  onClick: () => void
}
const PaymentSuccessCard = ({
  isSell,
  coinAmount,
  coinCode,
  onClick,
}: PaymentSuccessCardProps) => {
  return (
    <Container>
      <Stack alignItems={'center'} gap={theme.spacing(6)}>
        <Image
          src={success}
          alt="payment-success"
          imageProps={{ width: theme.spacing(16), height: theme.spacing(16) }}
        />
        <TypographyContainer>
          <StyleTypography variant="heading4">{`${coinAmount} ${coinCode}`}</StyleTypography>
          <StyleTypography variant="body2">{`${
            isSell ? Sell : PURCHASE
          } ${TRANSACTION_MESSAGE} ${
            isSell ? RUPEE_COIN : CRYPTO_WALLET
          }`}</StyleTypography>
        </TypographyContainer>
      </Stack>
      <ButtonContainer>
        <StyledButton
          label={`${isSell ? SELL_CRYPTO : BUY_CRYPTO}`}
          typographyVarient="button"
          variant="outlined"
        />
        <StyledButton
          label={USD_COIN_BUTTON}
          variant="contained"
          hoverColor={theme.palette.primary.main}
          typographyVarient="button"
          onClick={onClick}
        />
      </ButtonContainer>
    </Container>
  )
}

export default PaymentSuccessCard
