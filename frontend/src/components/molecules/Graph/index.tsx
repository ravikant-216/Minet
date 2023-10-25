import React from 'react'
// eslint-disable-next-line import/default
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { Box } from '@mui/material'

import theme from '@/theme/index'

export interface GraphProps {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries
  strokeColors: string[]
  fillColors: string[]
  opacity: number
  showLabel: boolean
  showGrid: boolean
  height?: string
  width?: string
  yaxisPlots?: string[]
}

const getChartOptions = (
  showLabel: boolean,
  yaxisPlots: string[] | undefined,
  strokeColors: string[],
  fillColors: string[],
  opacity: number,
  showGrid: boolean
): ApexOptions => {
  return {
    chart: {
      toolbar: {
        show: false,
      },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler()
        },
      },
    },
    xaxis: {
      labels: {
        show: showLabel,
        style: {
          colors: theme.palette.text.lowEmphasis,
        },
        offsetX: 2,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: yaxisPlots,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    stroke: {
      colors: strokeColors,
      width: 1,
    },
    fill: {
      colors: fillColors,
      type: 'solid',
      opacity: opacity,
    },
    grid: {
      show: showGrid,
      // padding: { left: 0, right: -10, top: -10, bottom: -10 },
    },
    tooltip: {
      enabled: false,
    },
    colors: strokeColors,
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      fontSize: theme.spacing(4),
      itemMargin: {
        horizontal: 20,
        vertical: 0,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
  }
}

const Graph = ({
  series,
  height,
  width,
  showLabel,
  showGrid,
  yaxisPlots,
  strokeColors,
  fillColors,
  opacity,
}: GraphProps) => {
  const options: ApexOptions = getChartOptions(
    showLabel,
    yaxisPlots,
    strokeColors,
    fillColors,
    opacity,
    showGrid
  )

  return (
    <Box data-testid="area-graph">
      <Chart
        options={options}
        series={series}
        width={width}
        height={height}
        type="area"
      ></Chart>
    </Box>
  )
}

export default Graph
