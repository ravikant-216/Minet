import theme from '@/theme'
import { Box, Divider, Stack } from '@mui/material'
import { CryptoIcon } from '../CryptocurrencyIcon'
import TypographyLabel from '@/components/atoms/TypographyLabel'
import ButtonComponent from '@/components/atoms/Button'
import StarCheckBox from '@/components/atoms/StarCheckBox'
import {
  ADD_TO_WATCHLIST,
  CIRCULATION_SUPPLY,
  MARKET_CAP,
  VOL_24_H,
} from '@/strings/constant'

interface WatchListCardProps {
  image: string
  name: string
  sign: string
  trendValue: number
  marketCap: number
  volIn24H: number
  circulatingSupply: number
  isAddedToWatchList?: boolean
  handleAddToWatchList?: () => void
}

const WatchListCard = ({
  image,
  name,
  sign,
  trendValue,
  isAddedToWatchList = true,
  volIn24H,
  circulatingSupply,
  marketCap,
  handleAddToWatchList,
}: WatchListCardProps) => {
  return (
    <Box
      padding={6}
      border={`1px solid ${theme.palette.gamma.GREY_100}`}
      borderRadius={1}
      sx={{
        background: theme.palette.gamma.GREY_WHITE,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" gap={6} alignItems="center">
          <Stack direction="row">
            <CryptoIcon
              icon={image}
              label1={name}
              label2={sign}
              label1Variant="heading6"
              label2Variant="body1"
              color2={theme.palette.text.mediumEmphasis}
              trendValue={trendValue}
              variant="overline"
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                width: '2px',
                height: theme.spacing(12),
                my: 'auto',
                mx: 8.25,
              }}
              color={theme.palette.gamma.GREY_300}
            />
          </Stack>
          <Stack direction="row" gap={4}>
            {[
              { label: MARKET_CAP, value: `$${marketCap}T` },
              { label: VOL_24_H, value: `$${volIn24H}T` },
              {
                label: CIRCULATION_SUPPLY,
                value: `${circulatingSupply}M ${sign}`,
              },
            ].map(({ value, label }) => (
              <TypographyLabel
                key={label}
                color1={theme.palette.text.mediumEmphasis}
                label1={label}
                label2={value}
                label1Variant="caption1"
                label2Variant="body1"
              />
            ))}
          </Stack>
        </Stack>
        <ButtonComponent
          sx={{
            height: theme.spacing(10.5),
          }}
          onClick={handleAddToWatchList}
          label={ADD_TO_WATCHLIST}
          variant="outlined"
          size="small"
          startIcon={
            <StarCheckBox
              checked={isAddedToWatchList}
              sx={{ mt: 3.9, mx: -2 }}
            />
          }
        />
      </Stack>
    </Box>
  )
}

export default WatchListCard
