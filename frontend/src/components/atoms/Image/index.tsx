import { Box, BoxProps } from '@mui/material'

interface ImageProps {
  boxProps?: BoxProps
  imageProps?: React.ImgHTMLAttributes<HTMLImageElement>
  src: string
  alt: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Image = ({ src, alt, boxProps, imageProps, onClick }: ImageProps) => {
  return (
    <Box {...boxProps} onClick={onClick}>
      <img src={src} alt={alt} {...imageProps} />
    </Box>
  )
}
export default Image
