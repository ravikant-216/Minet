import { Box, BoxProps, Stack, Typography } from '@mui/material'
import DollarIcon from '@Assets/icons/dollarBlue.svg'
import { CryptoIcon } from '../CryptocurrencyIcon'
import theme from '@/theme'
import { PAYMENT_METHOD } from '@/strings/constant'
import { PaymentMethodType } from '@/utils/types'

interface PaymentMethodSelectCardProps extends BoxProps {
  paymentOptions: PaymentMethodType[]
}

const PaymentMethodSelectCard = ({
  paymentOptions,
  ...props
}: PaymentMethodSelectCardProps) => {
  return (
    <Box
      {...props}
      gap={6}
      border={`1px solid ${theme.palette.gamma.GREY_100}`}
      padding={6}
      borderRadius={1}
      sx={{ background: theme.palette.gamma.GREY_WHITE }}
    >
      <Stack gap={4}>
        <Typography>{PAYMENT_METHOD}</Typography>
        {paymentOptions.map(({ name, balance, type }) => (
          <Box
            key={name}
            padding={4}
            border={`1px solid ${theme.palette.gamma.GREY_100}`}
            borderRadius={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CryptoIcon
              icon={DollarIcon}
              label1={name}
              label2={`Total Balance - ${balance}`}
              label1Variant="caption1"
              label2Variant="subtitle1"
              color2={theme.palette.text.mediumEmphasis}
            />
            <Typography color={theme.palette.text.mediumEmphasis}>
              {type}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
export default PaymentMethodSelectCard
