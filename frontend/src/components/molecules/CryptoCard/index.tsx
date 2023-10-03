import Image from '@/components/atoms/Image'
import TypographyLabel from '@/components/atoms/TypographyLabel'
import theme from '@/theme'
import { Box, BoxProps, Stack, Typography } from '@mui/material'

interface CryptoCardProps extends BoxProps {
  name: string
  image: string
  sign: string
  amount: number
  rate?: number
  varient?: 'primary' | 'secondary'
  textPosition?: 'right' | 'left'
}

const CryptoCard = ({
  name,
  image,
  sign,
  amount,
  rate,
  varient = 'primary',
  textPosition = 'right',
  ...props
}: CryptoCardProps) => {
  const primaryColor =
    rate !== undefined && rate >= 0
      ? theme.palette.gamma.SUCCESS_500
      : theme.palette.gamma.ERROR_300

  const primarySign = rate !== undefined && rate >= 0 ? '+' : '-'

  const color =
    varient === 'primary' ? primaryColor : theme.palette.text.mediumEmphasis

  const signIcon = varient == 'secondary' ? '' : primarySign

  return (
    <Box {...props} my={2} display="flex" justifyContent="space-between">
      <Stack direction="row" gap={2.5}>
        <Image src={image} alt={name} />
        <TypographyLabel
          label1={name}
          label2={sign}
          label1Variant="body1"
          label2Variant="caption2"
          color1={theme.palette.text.highEmphasis}
          color2={theme.palette.text.lowEmphasis}
        />
      </Stack>
      {rate ? (
        <Stack>
          <TypographyLabel
            label2={`${signIcon}${Math.abs(rate)}%`}
            label1={`$ ${amount}`}
            label1Variant="body1"
            label2Variant="caption2"
            color2={color}
            position={textPosition}
          />
        </Stack>
      ) : (
        <Stack justifyContent="center">
          <Typography variant="body1">{`$ ${amount}`}</Typography>
        </Stack>
      )}
    </Box>
  )
}

export default CryptoCard
