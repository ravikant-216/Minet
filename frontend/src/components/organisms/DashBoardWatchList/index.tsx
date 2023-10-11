import ButtonComponent from '@/components/atoms/Button'
import {
  Divider,
  Grid,
  Stack,
  StackProps,
  Typography,
  styled,
} from '@mui/material'
import RightArrow from '@Assets/icons/rightArrow.svg'
import Image from '@/components/atoms/Image'
import GridIcon from '@Assets/icons/gridIcon.svg'
import ListIcon from '@Assets/icons/listIcon.svg'
import PencilIcon from '@Assets/icons/pencilIcon.svg'
import theme from '@/theme'
import { WatchListCurrencyCard } from '@/components/molecules/WatchListCurrencyCard'
import { WatchListItemType } from '@/utils/types'
import { DISCOVER_ASSETS, VIEW_WATCHLIST, WATCHLIST } from '@/strings/constant'

interface DashBoardWatchListProps extends StackProps {
  items: WatchListItemType[]
  discoverAssetOnClick?: () => void
}

const StyledDivider = styled(Divider)({
  height: theme.spacing(5),
  width: theme.spacing(1),
  color: theme.palette.grey[100],
  alignSelf: 'center',
})

const DashBoardWatchList = ({
  items,
  discoverAssetOnClick,
  ...props
}: DashBoardWatchListProps) => {
  return (
    <Stack {...props}>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          direction="row"
          alignItems="center"
          maxHeight={theme.spacing(22.5)}
          gap={3}
        >
          <Typography variant="subtitle1">{WATCHLIST}</Typography>
          <StyledDivider flexItem orientation="vertical" variant="middle" />
          <ButtonComponent
            onClick={discoverAssetOnClick}
            label={DISCOVER_ASSETS}
            typographyVarient="caption2"
            endIcon={
              <Image src={RightArrow} alt="rightArrow" boxProps={{ mt: 3 }} />
            }
          />
        </Stack>
        <Stack direction="row" alignItems="center">
          <ButtonComponent
            label={VIEW_WATCHLIST}
            typographyVarient="caption2"
            endIcon={
              <Image src={PencilIcon} alt="rightArrow" boxProps={{ mt: 3 }} />
            }
          />
          <StyledDivider flexItem orientation="vertical" variant="middle" />
          <Image src={GridIcon} alt="gridIcon" boxProps={{ mt: 1 }} />
          <Image src={ListIcon} alt="listIcon" boxProps={{ mt: 1.5 }} />
        </Stack>
      </Stack>
      <Grid container spacing={6}>
        {items.map(
          ({ id, image, name, value, trendValue, graphData }, index) => (
            <Grid
              item
              xs={index === items.length - 1 && items.length % 2 !== 0 ? 12 : 6}
              key={id}
            >
              <WatchListCurrencyCard
                icon={image}
                label1={name}
                label2={value}
                trendValue={trendValue}
                graphProps={{
                  height: theme.spacing(24.5),
                  opacity: 0.5,
                  series: [graphData],
                  showLabel: false,
                  showGrid: false,
                }}
                color1={theme.palette.text.highEmphasis}
                color2={theme.palette.text.highEmphasis}
                label1Variant="body1"
                label2Variant="body1"
                width="100%"
              />
            </Grid>
          )
        )}
      </Grid>
    </Stack>
  )
}
export default DashBoardWatchList
