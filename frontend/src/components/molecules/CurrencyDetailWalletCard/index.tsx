import ChipComponent from '@/components/atoms/Chip'
import TypographyLabel from '@/components/atoms/TypographyLabel'
import theme from '@/theme'
import cancel from '@Assets/icons/cancel.svg'
import pending from '@Assets/icons/pending.svg'
import success from '@Assets/icons/success.svg'
import { Box } from '@mui/material'
import { CryptoIcon } from '../CryptocurrencyIcon'

export interface CurrencyDetailWalletCardProps {
  type: 'pending' | 'success' | 'cancel'
  label1: string
  label2: string
  mounth: string
  day: number
  transactionType: 'Sold' | 'Purchased'
  price: string
  cyprtoAmount: string
}
const CurrencyDetailWalletCard = ({
  ...props
}: CurrencyDetailWalletCardProps) => {
  let icon
  switch (props.type) {
    case 'pending':
      icon = pending
      break
    case 'success':
      icon = success
      break
    default:
      icon = cancel
  }

  return (
    <Box display={'flex'} justifyContent={'space-between'}>
      <Box display={'flex'} gap={theme.spacing(2.5)}>
        <Box display="flex" alignItems={'center'}>
          <Box marginRight={theme.spacing(3)} marginTop={theme.spacing(0.5)}>
            <TypographyLabel
              label1={props.mounth}
              label2={props.day as unknown as string}
              label1Variant={'caption2'}
              label2Variant={'subtitle2'}
              gap={1}
              color2={theme.palette.text.highEmphasis}
              color1={theme.palette.text.mediumEmphasis}
            />
          </Box>
          <CryptoIcon
            icon={icon}
            label1={props.label1}
            label2={props.label2}
            label1Variant={'body1'}
            gap={2}
            label2Variant={'caption2'}
            color1={theme.palette.text.highEmphasis}
            color2={theme.palette.text.mediumEmphasis}
          ></CryptoIcon>
        </Box>
        <Box
          display={'flex'}
          alignItems={'flex-end'}
          justifyContent={'flex-end'}
        >
          <ChipComponent
            label={props.transactionType}
            textVariant={'caption2'}
            textColor={theme.palette.gamma.GREY_500}
            background={theme.palette.gamma.GREY_50}
            height={`${theme.spacing(6)}`}
            padding={`${theme.spacing(0.25)} ${theme.spacing(1)}`}
          />
        </Box>
      </Box>
      <TypographyLabel
        label1={props.cyprtoAmount}
        label2={props.price}
        label1Variant={'body1'}
        label2Variant={'caption2'}
        color1={theme.palette.text.highEmphasis}
        color2={theme.palette.text.mediumEmphasis}
        position="right"
        gap={2}
      />
    </Box>
  )
}

export default CurrencyDetailWalletCard
