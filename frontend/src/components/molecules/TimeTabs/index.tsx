import { TIME_PERIOD } from '@/strings/constant'
import theme from '@/theme'
import { Stack, Typography, styled } from '@mui/material'

const MainContainer = styled(Stack)({
  gap: theme.spacing(4),
  borderRadius: theme.spacing(1),
  padding: `${theme.spacing(2.5)} ${theme.spacing(4)}`,
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
})
const Tab = styled(Stack)({
  width: theme.spacing(8),
  height: theme.spacing(8),
  textAlign: 'center',
  justifyContent: 'center',
})
const ActiveTabWithUnderline = {
  color: theme.palette.primary.main,
  textAlign: 'center',
  cursor: 'pointer',
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  paddingBottom: theme.spacing(1),
}
const ActiveTabWithCircleBorder = {
  color: theme.palette.primary[900],
  cursor: 'pointer',
  borderRadius: theme.spacing(12.5),
  backgroundColor: theme.palette.primary[300],
}
const DeActiveTab = styled(Typography)({
  color: theme.palette.text.mediumEmphasis,
})

interface TimeTabProps {
  borderRadius: boolean
  width: string
}
const TimeTabs = ({ borderRadius, width }: TimeTabProps) => {
  return (
    <MainContainer
      width={width}
      flexDirection={'row'}
      data-testid="time-period-tabs"
    >
      {TIME_PERIOD.map((time) => {
        return time.key === 4 ? (
          <Tab
            sx={borderRadius ? ActiveTabWithCircleBorder : {}}
            data-testid="active-tab"
          >
            <Typography
              sx={borderRadius ? {} : ActiveTabWithUnderline}
              key={time.key}
              variant={borderRadius ? 'caption2' : 'caption1'}
            >
              {time.value}
            </Typography>
          </Tab>
        ) : (
          <Tab>
            <DeActiveTab key={time.key} variant="caption2">
              {time.value}
            </DeActiveTab>
          </Tab>
        )
      })}
    </MainContainer>
  )
}

export default TimeTabs
