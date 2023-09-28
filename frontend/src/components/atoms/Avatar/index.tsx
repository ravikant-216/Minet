import { Avatar, AvatarProps } from '@mui/material'

interface IAvatarProps extends AvatarProps {
  src: string
  alt: string
}

const AvatarComponent = ({ alt, src }: IAvatarProps) => {
  return <Avatar alt={alt} src={src} data-testid="avatar" />
}

export default AvatarComponent
