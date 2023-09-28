import Image from '@/components/atoms/Image'
import theme from '@/theme'
import { Box, BoxProps, Typography } from '@mui/material'

interface SocialLoginProps extends BoxProps {
  src: string
  name: string
}

const SocialLoginButton = ({ src, name, ...props }: SocialLoginProps) => {
  return (
    <Box
      width={theme.spacing(40)}
      {...props}
      display="flex"
      flexDirection="column"
      height={theme.spacing(24)}
      gap={2}
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.primary[100],
        border: `1px solid ${theme.palette.gamma.GREY_100}`,
        padding: `${theme.spacing(4)} ${theme.spacing(7.5)}`,
        borderRadius: theme.spacing(3),
      }}
    >
      <Image src={src} alt={name} />
      <Typography variant="body1" color={theme.palette.text.mediumEmphasis}>
        {name}
      </Typography>
    </Box>
  )
}

export default SocialLoginButton
