import TrendTypography from '@/components/atoms/TrendTypography'
import TypographyLabel from '@/components/atoms/TypographyLabel'
import Graph from '@/components/molecules/Graph'
import TimeTabs from '@/components/molecules/TimeTabs'
import { CURRENT_VALUE, PRICE_CORRELATION_WITH } from '@/strings/constant'
import theme from '@/theme'
import { Box, Stack, Typography } from '@mui/material'
import GlobeIcon from '@Assets/icons/globe.svg'
import Image from '@/components/atoms/Image'
import PaperIcon from '@Assets/icons/paper.svg'
import CorrelationCard from '@/components/molecules/PriceCorrelationCard'
import { CorelationCardData, GraphPlotData } from '@/utils/types'

export interface CurrencyDetailOverviewProps {
  correlationCardData: CorelationCardData[]
  trendValue: number
  currentValue: string
  name: string
  description: string
  yaxisPlotsData: string[]
  plotData: GraphPlotData
}

const CurrencyDetailOverview = ({
  correlationCardData,
  trendValue,
  currentValue,
  name,
  description,
  yaxisPlotsData,
  plotData,
}: CurrencyDetailOverviewProps) => {
  return (
    <Stack gap={6}>
      <Box
        border={`1px solid ${theme.palette.gamma.GREY_100}`}
        p={6}
        borderRadius={1}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack gap={1}>
            <TypographyLabel
              label1={CURRENT_VALUE}
              label2={currentValue}
              label1Variant="caption1"
              label2Variant="heading6"
              color1={theme.palette.text.mediumEmphasis}
              color2={theme.palette.text.highEmphasis}
            />
            <TrendTypography value={trendValue} />
          </Stack>
          <Stack alignSelf="center">
            <TimeTabs
              borderRadius={true}
              width={theme.spacing(74)}
              height="fit-content"
            />
          </Stack>
        </Stack>
        <Stack flexGrow={1}>
          <Graph
            series={[plotData]}
            height={theme.spacing(67.5)}
            width="100%"
            showLabel={true}
            showGrid={true}
            yaxisPlots={yaxisPlotsData}
            strokeColors={[
              theme.palette.gamma.WARNING_300,
              theme.palette.primary[500],
            ]}
            fillColors={[
              theme.palette.gamma.WARNING_100,
              theme.palette.primary[300],
            ]}
            opacity={0.5}
          />
        </Stack>
      </Box>
      <Stack direction="row" gap={6} justifyContent="space-between">
        <Stack gap={6}>
          <Stack>
            <Typography variant="body1">{`About ${name}`}</Typography>
            <Typography variant="body2" maxWidth={theme.spacing(202)}>
              {description}
            </Typography>
          </Stack>
          <Stack gap={3}>
            <Typography variant="body1">Resources</Typography>
            <Typography component="div">
              {[
                { icon: GlobeIcon, label: 'Website' },
                { icon: PaperIcon, label: 'White Paper' },
              ].map((item) => (
                <Stack
                  key={item.label}
                  direction="row"
                  alignItems="center"
                  gap={1}
                  ml={-1}
                >
                  <Image src={item.icon} alt={item.label} />
                  <Typography
                    color={theme.palette.primary[500]}
                    variant="body2"
                  >
                    {item.label}
                  </Typography>
                </Stack>
              ))}
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <CorrelationCard
            CardName={PRICE_CORRELATION_WITH}
            CardData={correlationCardData}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CurrencyDetailOverview
