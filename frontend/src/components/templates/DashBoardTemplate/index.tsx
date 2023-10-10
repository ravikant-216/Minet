import DashboardHeader from '@/components/organisms/DashboardHeader'
import NavigationBar from '@/components/organisms/NavigationBar'
import { NavigatonItems } from '@/strings/constant'
import { Stack } from '@mui/material'
import avatar from '@Assets/icons/avatar.svg'
import Footer from '@/components/molecules/Footer'
import theme from '@/theme'

interface DashBoardTemplateProps {
  children: React.ReactNode
  title: string
  isButton?: boolean
}

const DashBoardTemplate = ({
  children,
  title,
  isButton = true,
}: DashBoardTemplateProps) => {
  const handleOnClick = (value: string) => {
    //*Will be doing during integration
    console.log(value)
  }
  return (
    <Stack
      direction="row"
      sx={{ background: theme.palette.primary[100] }}
      overflow="none"
      boxSizing="border-box"
      height="95vh"
    >
      <NavigationBar
        navigationItems={NavigatonItems}
        sx={{
          background: theme.palette.gamma.GREY_WHITE,
          justifyContent: 'flex-start',
        }}
        handleOnClick={handleOnClick}
        height="100%"
      />
      <Stack direction="column" width="100%">
        <Stack flexGrow={1}>
          <DashboardHeader
            alignItems="center"
            height="fit-content"
            sx={{
              background: theme.palette.gamma.GREY_WHITE,
            }}
            dashboardHeading={title}
            isButton={isButton}
            avatar={avatar}
          />
          <Stack
            flexGrow={1}
            sx={{
              border: `1px solid ${theme.palette.gamma.GREY_100}`,
              borderRight: 'none',
            }}
          >
            {children}
          </Stack>
        </Stack>
        <Footer
          sx={{
            background: theme.palette.gamma.GREY_WHITE,
          }}
          position="static"
          display="flex"
        />
      </Stack>
    </Stack>
  )
}
export default DashBoardTemplate
