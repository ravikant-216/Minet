import Image from '@/components/atoms/Image'
import TypographyLabel, {
  TypographyLabelProps,
} from '@/components/atoms/TypographyLabel'
import { SxProps, Box } from '@mui/material'
import React from 'react'

export interface CryptoIconProps extends TypographyLabelProps {
  icon: string
  sx?: SxProps
}
export const CryptoIcon = ({ icon, sx, ...props }: CryptoIconProps) => {
  return (
    <Box sx={{ ...sx, display: 'flex', gap: 3, alignItems: 'center' }}>
      <Image src={icon} alt={'icon'}></Image>
      <TypographyLabel {...props}></TypographyLabel>
    </Box>
  )
}
