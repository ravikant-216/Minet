import Image from '@/components/atoms/Image'
import TypographyLabel, {
  TypographyLabelProps,
} from '@/components/atoms/TypographyLabel'
import { Box, SxProps } from '@mui/material'

export interface CryptoIconProps extends TypographyLabelProps {
  icon: string
  sx?: SxProps
  imageProps?: React.ImgHTMLAttributes<HTMLImageElement>
}
export const CryptoIcon = ({
  icon,
  sx,
  imageProps,
  ...props
}: CryptoIconProps) => {
  return (
    <Box sx={{ ...sx, display: 'flex', gap: 3, alignItems: 'center' }}>
      <Image
        src={icon}
        alt={'icon'}
        imageProps={imageProps}
        boxProps={{ alignSelf: 'center', display: 'flex' }}
      />
      <TypographyLabel {...props} />
    </Box>
  )
}
