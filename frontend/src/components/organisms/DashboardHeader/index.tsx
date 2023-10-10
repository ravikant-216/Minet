import AvatarComponent from '@/components/atoms/Avatar'
import ButtonComponent from '@/components/atoms/Button'
import { BUY, SELL } from '@/strings/constant'
import theme from '@/theme'
import { Box, BoxProps, Stack, Typography, styled } from '@mui/material'
import ExpandMoreIcon from '@Assets/icons/chevron-down.svg'
import Image from '@/components/atoms/Image'

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  padding: `${theme.spacing(5)} ${theme.spacing(6)}`,
  justifyContent: 'space-between',
})

interface DashboardHeaderProps extends BoxProps {
  dashboardHeading: string
  avatar: string
  isButton: boolean
  onBuy?: () => void
  onSell?: () => void
}
const DashboardHeader = ({
  dashboardHeading,
  isButton,
  avatar,
  onBuy,
  onSell,
  ...props
}: DashboardHeaderProps) => {
  return (
    <Container {...props}>
      <Typography color={theme.palette.text.highEmphasis} variant="h6">
        {dashboardHeading}
      </Typography>
      <Stack
        gap={theme.spacing(5.25)}
        alignItems={'center'}
        height={theme.spacing(10.5)}
        direction={'row'}
      >
        {isButton && (
          <Stack gap={theme.spacing(3)} direction={'row'}>
            <ButtonComponent
              hoverColor={theme.palette.gamma.WARNING_300}
              label={SELL}
              onClick={onSell}
              sx={{
                backgroundColor: theme.palette.gamma.WARNING_300,
                height: theme.spacing(10.5),
                width: theme.spacing(30),
              }}
              textColor={theme.palette.gamma.GREY_WHITE}
              variant="contained"
            />
            <ButtonComponent
              hoverColor={theme.palette.primary.main}
              label={BUY}
              onClick={onBuy}
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: theme.spacing(10.5),
                width: theme.spacing(30),
              }}
              textColor={theme.palette.gamma.GREY_WHITE}
              variant="contained"
            />
          </Stack>
        )}
        <Stack
          direction={'row'}
          alignItems={'stretch'}
          height={theme.spacing(8)}
        >
          <AvatarComponent
            src={avatar}
            alt="avatar"
            sx={{ width: theme.spacing(8), height: theme.spacing(8) }}
          />
          <Image
            src={ExpandMoreIcon}
            alt="Dropdown Icon"
            imageProps={{
              width: theme.spacing(8),
              height: theme.spacing(8),
            }}
          />
        </Stack>
      </Stack>
    </Container>
  )
}

export default DashboardHeader
