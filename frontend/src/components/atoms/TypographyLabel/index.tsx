import React from 'react'
import { Typography, Box } from '@mui/material'
import theme from '@/theme'
import TrendTypography from '../TrendTypography'

export type variant =
  | 'overline'
  | 'caption2'
  | 'caption1'
  | 'button'
  | 'body2'
  | 'body1'
  | 'subtitle2'
  | 'heading6'
  | 'heading4'

export interface TypographyLabelProps {
  label1: string
  label2: string
  color1: string
  color2: string
  label1Variant: variant
  label2Variant: variant
  variant?: variant
  trendValue?: number
  trendDirection?: 'row' | 'column'
  position?: 'right' | 'left'
}

const TypographyLabel: React.FC<TypographyLabelProps> = ({
  label1,
  label2,
  label1Variant,
  label2Variant,
  color1,
  color2,
  variant = 'caption1',
  trendValue,
  trendDirection = 'row',
  position = 'left',
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={position === 'left' ? 'flex-start' : 'flex-end'}
      gap={theme.spacing(1)}
    >
      <Typography variant={label1Variant} color={color1}>
        {label1}
      </Typography>
      <Box
        display="flex"
        flexDirection={trendDirection}
        alignItems={trendDirection === 'row' ? 'center' : 'start'}
        gap={trendDirection === 'row' ? 0 : theme.spacing(1)}
      >
        <Typography variant={label2Variant} color={color2}>
          {label2}
        </Typography>
        {trendValue && (
          <TrendTypography
            value={trendValue}
            variant={variant}
          ></TrendTypography>
        )}
      </Box>
    </Box>
  )
}

export default TypographyLabel
