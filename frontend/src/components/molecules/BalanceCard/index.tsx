import Image from '@/components/atoms/Image'
import {
  Box,
  BoxProps,
  Stack,
  Typography,
  TypographyVariant,
} from '@mui/material'
import theme from '@/theme'

interface BalanceCardProps extends BoxProps {
  title: string
  logo: string
  name: string
  detail: string
  detailVariant: TypographyVariant | 'caption2'
  detailColor?: string
}

const BalanceCard = ({
  title,
  detail,
  name,
  logo,
  detailVariant,
  detailColor,
  ...props
}: BalanceCardProps) => {
  return (
    <Box
      {...props}
      display="flex"
      flexDirection="column"
      gap={3}
      borderRadius={1}
      border={`1px solid ${theme.palette.gamma.GREY_100}`}
      padding={6}
    >
      <Typography variant="body1">{title}</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={4}
        borderRadius={1}
        border={`1px solid ${theme.palette.gamma.GREY_100}`}
      >
        <Stack direction="row" alignItems="center" gap={3}>
          <Image
            src={logo}
            alt="BitCoin"
            imageProps={{
              height: theme.spacing(8),
              width: theme.spacing(8),
            }}
          />
          <Typography variant="caption1">{name}</Typography>
        </Stack>
        <Typography variant={detailVariant} color={detailColor}>
          {detail}
        </Typography>
      </Box>
    </Box>
  )
}

export default BalanceCard
