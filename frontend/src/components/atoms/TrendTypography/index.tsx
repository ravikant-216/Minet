import { Stack, Typography } from '@mui/material'
import UpArrow from '@Assets/icons/UpArrow.svg'
import DownArrow from '@Assets/icons/DownArrow.svg'
import Image from '../Image'
import theme from '@/theme'
import { variant } from '../TypographyLabel'

interface TrendTypographyProps {
  value: number
  variant?: variant
}

const TrendTypography = ({
  value,
  variant = 'caption1',
}: TrendTypographyProps) => {
  const color =
    value >= 0 ? theme.palette.gamma.SUCCESS_500 : theme.palette.gamma.ERROR_300

  const sign = value >= 0 ? '+' : '-'

  const icon = value >= 0 ? UpArrow : DownArrow

  return (
    <Stack direction="row" alignItems="center">
      <Image src={icon} alt="UpArrow" />
      <Typography variant={variant} color={color} mb={0.9}>
        {sign}
        {Math.abs(value)}%
      </Typography>
    </Stack>
  )
}

export default TrendTypography
