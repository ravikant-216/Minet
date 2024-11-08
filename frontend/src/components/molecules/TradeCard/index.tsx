import Image from '@/components/atoms/Image'
import StarCheckBox from '@/components/atoms/StarCheckBox'
import theme from '@/theme'
import { Stack, Typography, styled } from '@mui/material'

interface TradeCardProps {
  imageSrc: string
  currencyName: string
  currencyCode: string
  price: string
  change: number
  marketCap: string
  checked?: boolean
  onCardClick?: () => void
  onStarClick?: () => void
}
const Container = styled(Stack)({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  height: theme.spacing(18.5),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
  backgroundColor: theme.palette.gamma.GREY_WHITE,
})

const Card = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  width: theme.spacing(75),
  height: theme.spacing(10.5),
  gap: theme.spacing(2.5),
})
const StyleTypography = styled(Typography)({
  color: theme.palette.text.highEmphasis,
})

const StyleStack = styled(Stack)({
  justifyContent: 'center',
  cursor: 'pointer',
  height: theme.spacing(10.5),
})
const TradeCard = ({
  imageSrc,
  currencyName,
  currencyCode,
  price,
  change,
  marketCap,
  checked,
  onCardClick,
  onStarClick,
}: TradeCardProps) => {
  const sign = change >= 0 ? '+' : '-'
  const color =
    change >= 0
      ? theme.palette.gamma.SUCCESS_500
      : theme.palette.gamma.ERROR_300

  return (
    <Container data-testid={`watchlistIcon_${currencyName}`}>
      <Card onClick={onCardClick}>
        <Image
          src={imageSrc}
          alt="crypto-symbol"
          imageProps={{
            width: theme.spacing(10.5),
            height: theme.spacing(10.5),
          }}
        />
        <Stack sx={{ cursor: 'pointer' }} gap={theme.spacing(1)}>
          <StyleTypography variant="body1">{currencyName}</StyleTypography>
          <Typography
            color={theme.palette.text.mediumEmphasis}
            variant="overline"
          >
            {currencyCode}
          </Typography>
        </Stack>
      </Card>
      <StyleStack width={theme.spacing(84.25)} onClick={onCardClick}>
        <StyleTypography variant="body2">{price}</StyleTypography>
      </StyleStack>
      <StyleStack width={theme.spacing(59.75)} onClick={onCardClick}>
        <Typography color={color} variant="body2">
          {`${sign}${Math.abs(change)}%`}
        </Typography>
      </StyleStack>
      <StyleStack width={theme.spacing(59.25)} onClick={onCardClick}>
        <StyleTypography variant="body2">{marketCap}</StyleTypography>
      </StyleStack>
      <StyleStack width={theme.spacing(19.5)}>
        <StarCheckBox checked={checked} onClick={onStarClick} />
      </StyleStack>
    </Container>
  )
}

export default TradeCard
