import React from 'react'
import { Grid, Divider, styled, useTheme, Box, Typography } from '@mui/material'
import ImageComponent from '@Components/atoms/Image'
import TrendTypography from '@Components/atoms/TrendTypography'
import Graph from '@Components/molecules/Graph'
import TimeTabs from '@/components/molecules/TimeTabs'
import PortfolioImage from '@Assets/icons/myPortfolio.svg'
import Chart from '@Assets/icons/charts.svg'
import GraphImage from '@Assets/icons/graph.svg'
import DotImage from '@Assets/icons/dot.svg'
import { MY_PORTFOLIO_VALUE, TOTAL_INVESTMENT } from '@/strings/constant'

export interface PortfolioValueProps {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries
  totalInvestmentsData: TextComponentProps
  cryptoInvestmentsData?: TextComponentProps
  plotData?: string[]
}

const UpperParentGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  padding: `${theme.spacing(6)}`,
  border: `${theme.spacing(0.25)} solid ${theme.palette.gamma.GREY_100}`,
  borderRadius: theme.spacing(0.25),
  backgroundColor: theme.palette.gamma.GREY_WHITE,
}))

const ChildGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const HeaderGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const StyledDivider = styled(Divider)(({ theme }) => ({
  color: theme.palette.grey[300],
  borderWidth: theme.spacing(0.25),
  minHeight: theme.spacing(11),
}))

const ImageBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const ImageHeader = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(2),
}))

const TextGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(7),
}))

const TextGridOne = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

interface TextComponentProps {
  title: string
  trendRate: number
  amount: string
}
const TextComponent = ({ title, trendRate, amount }: TextComponentProps) => {
  const theme = useTheme()
  return (
    <Grid item>
      <TextGridOne>
        <Typography
          variant="caption1"
          color={theme.palette.text.mediumEmphasis}
        >
          {title}
        </Typography>
        <TrendTypography value={trendRate} variant="overline" />
      </TextGridOne>
      <Typography variant="h6" color={theme.palette.text.highEmphasis}>
        $ {amount}
      </Typography>
    </Grid>
  )
}

const MyPortfolio = ({
  series,
  totalInvestmentsData,
  cryptoInvestmentsData,
  plotData,
}: PortfolioValueProps) => {
  const theme = useTheme()
  return (
    <Box gap={theme.spacing(3)} data-testId="myportfolio">
      <HeaderGrid>
        <Typography variant="subtitle1">{MY_PORTFOLIO_VALUE}</Typography>
        <HeaderGrid>
          <ImageComponent src={Chart} alt="chart" />
          <ImageComponent src={GraphImage} alt="graph" />
        </HeaderGrid>
      </HeaderGrid>
      <UpperParentGrid container>
        <Grid item>
          <ChildGrid container data-testid="top-grid">
            <Grid item>
              <TextGrid container>
                <>
                  <TextComponent
                    title={totalInvestmentsData.title}
                    trendRate={totalInvestmentsData.trendRate}
                    amount={totalInvestmentsData.amount}
                  />
                  {cryptoInvestmentsData && (
                    <>
                      <StyledDivider orientation="vertical" />
                      <TextComponent
                        title={cryptoInvestmentsData.title}
                        trendRate={cryptoInvestmentsData.trendRate}
                        amount={cryptoInvestmentsData.amount}
                      />
                    </>
                  )}
                </>
              </TextGrid>
            </Grid>
            <Grid item sx={{ marginRight: theme.spacing(4) }}>
              <TimeTabs borderRadius={false} width={theme.spacing(76)} />
            </Grid>
          </ChildGrid>
        </Grid>
        <Grid item>
          {series ? (
            <Graph
              series={series}
              height={theme.spacing(67.5)}
              width="100%"
              showLabel={true}
              showGrid={true}
              yaxisPlots={plotData}
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
          ) : (
            <>
              <ImageHeader>
                <ImageComponent src={DotImage} alt="dot" />
                <Typography variant="overline">{TOTAL_INVESTMENT}</Typography>
              </ImageHeader>
              <ImageBox>
                <ImageComponent src={PortfolioImage} alt="Portfolio" />
              </ImageBox>
            </>
          )}
        </Grid>
      </UpperParentGrid>
    </Box>
  )
}

export default MyPortfolio
