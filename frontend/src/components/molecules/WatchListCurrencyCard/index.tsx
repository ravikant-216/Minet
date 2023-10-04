import React from 'react'
import { CryptoIcon, CryptoIconProps } from '../CryptocurrencyIcon'
import theme from '@/theme'
import Graph, { GraphProps } from '../Graph'
import { Box, TypographyProps } from '@mui/material'
import ChipComponent from '@/components/atoms/Chip'
import TrendTypography from '@/components/atoms/TrendTypography'
export interface WatchListCurrencyCardProps extends CryptoIconProps {
  trendValue: number
  trendVariant?: TypographyProps
  graphProps: Omit<GraphProps, 'fillColors' | 'strokeColors'>
  timeValue?: string
  width?: string
}
export const WatchListCurrencyCard = ({
  width,
  ...props
}: WatchListCurrencyCardProps) => {
  const stockColor =
    props.trendValue >= 0
      ? theme.palette.gamma.SUCCESS_500
      : theme.palette.gamma.ERROR_300
  const fillColor =
    props.trendValue >= 0
      ? theme.palette.gamma.SUCCESS_100
      : theme.palette.gamma.ERROR_100
  return (
    <Box
      sx={{
        display: 'flex',
        width: width,
        padding: `${theme.spacing(5)} ${theme.spacing(6)} ${theme.spacing(
          0
        )} ${theme.spacing(6)}`,
        borderRadius: `${theme.spacing(1)}`,
        border: `${theme.spacing(0.25)} solid ${theme.palette.gamma.GREY_100}`,
        backgroundColor: theme.palette.gamma.GREY_WHITE,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
        }}
      >
        <CryptoIcon
          icon={props.icon}
          label1={props.label1}
          label2={props.label2}
          label1Variant={props.label1Variant}
          label2Variant={props.label2Variant}
          color1={props.color1}
          color2={props.color2}
        />
        <ChipComponent
          label={'24h'}
          textVariant={'overline'}
          textColor={theme.palette.text.mediumEmphasis}
          background={''}
          borderRadius={`${theme.spacing(25)}`}
          width={`${theme.spacing(11.25)}`}
          height={`${theme.spacing(5)}`}
          sx={{
            marginLeft: `${theme.spacing(13.75)}`,
            position: 'absolute',
            top: `${theme.spacing(25)}`,
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          width: '90%',
        }}
      >
        <TrendTypography value={props.trendValue} variant="caption2" />

        <Box
          marginTop={`-${theme.spacing(8.5)}`}
          marginRight={`-${theme.spacing(2)}`}
          marginLeft={`-${theme.spacing(4.5)}`}
          padding={0}
          width="100%"
        >
          <Graph
            {...props.graphProps}
            showLabel={false}
            fillColors={[fillColor]}
            strokeColors={[stockColor]}
            width={props.graphProps.width}
            height={props.graphProps.height}
            showGrid={false}
          />
        </Box>
      </Box>
    </Box>
  )
}
