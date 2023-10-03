import ButtonComponent from '@Components/atoms/Button/index'
import { AMOUNT_DETAILS, BUY_MAX, SELL_MAX } from '@/strings/constant'
import theme from '@/theme/index'
import { Card, Stack, Typography, Box, styled } from '@mui/material'
import CustomSlider from '@/components/atoms/Slider'

export interface AccountDetailCardProps {
  isBuy: boolean
  crypto: string
  label: string
  sliderValue: string
  userBalance: string
  sliderMaxValue: number
  onClick?: () => void
  onSliderChange?: (value: number) => void
}
const StyleStack = styled(Stack)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
})
const StyleTypography = styled(Typography)`
  color: ${theme.palette.text.highEmphasis};
`

const StyleCard = styled(Card)({
  padding: theme.spacing(6),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.gamma.GREY_WHITE,
  gap: theme.spacing(3),
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
})
const SliderBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

const AccountDetailCard = ({
  isBuy,
  crypto,
  label,
  userBalance,
  sliderValue,
  sliderMaxValue,
  onClick,
  onSliderChange,
}: AccountDetailCardProps) => {
  return (
    <StyleCard>
      <StyleTypography variant="body1">{AMOUNT_DETAILS}</StyleTypography>
      <Stack>
        <StyleStack flexDirection={'row'}>
          <StyleTypography variant="subtitle1">
            {isBuy ? userBalance : crypto}
          </StyleTypography>
          <ButtonComponent
            label={isBuy ? BUY_MAX : SELL_MAX}
            variant="outlined"
            sx={{ textTransform: 'none' }}
            onClick={onClick}
          />
        </StyleStack>
        <SliderBox>
          <CustomSlider
            max={sliderMaxValue}
            defaultValue={sliderMaxValue / 2}
            onChange={onSliderChange}
            orientation="vertical"
            valueLabelDisplay="auto"
            sx={{
              height: theme.spacing(22),
              width: theme.spacing(0.5),
              marginLeft: theme.spacing(17),
            }}
          />
          <Typography variant="caption" color={theme.palette.text.secondary}>
            {sliderValue}
          </Typography>
        </SliderBox>
        <StyleStack flexDirection={'row'}>
          <StyleTypography variant="subtitle1">
            {isBuy ? crypto : userBalance}
          </StyleTypography>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.text.mediumEmphasis }}
          >
            {label}
          </Typography>
        </StyleStack>
      </Stack>
    </StyleCard>
  )
}

export default AccountDetailCard
