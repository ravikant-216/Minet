import { Avatar, AvatarProps, SxProps } from '@mui/material'

interface IAvatarProps extends AvatarProps {
  src: string
  alt: string
  sx?: SxProps
}

const AvatarComponent = ({ alt, src, sx }: IAvatarProps) => {
  return <Avatar alt={alt} src={src} sx={sx} data-testid="avatar" />
}

export default AvatarComponent
