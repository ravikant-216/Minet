import Image from '@/components/atoms/Image'
import theme from '@/theme'
import tick from '@Assets/icons/tik.svg'
import { Box, SxProps, Typography } from '@mui/material'

export interface MyPortfolioCardProps {
  icon: string
  label: string
  subLabel: string
  selected?: boolean
  sx?: SxProps
  onClick?: () => void
}
const MyPortfolioCard = ({ ...props }: MyPortfolioCardProps) => {
  return (
    <Box
      sx={{ ...props.sx, position: 'relative', cursor: 'pointer' }}
      padding={theme.spacing(6)}
      border={`${theme.spacing(0.5)} solid ${
        props.selected ? theme.palette.primary[500] : 'transparent'
      }`}
      borderRadius={theme.spacing(1)}
      onClick={props.onClick}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={1}
        flexDirection={'column'}
      >
        <Image
          src={props.icon}
          alt={'icon'}
          imageProps={{
            height: theme.spacing(14),
            width: theme.spacing(14),
          }}
        />
        <Typography variant="body1" color={theme.palette.text.highEmphasis}>
          {props.label}
        </Typography>
        <Typography
          variant="caption1"
          color={theme.palette.text.mediumEmphasis}
        >
          {props.subLabel}
        </Typography>
      </Box>
      {props.selected && (
        <Image
          src={tick}
          alt={'tick'}
          boxProps={{ position: 'absolute', top: theme.spacing(1), right: 0 }}
        />
      )}
    </Box>
  )
}

export default MyPortfolioCard
