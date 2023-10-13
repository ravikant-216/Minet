import DashboardHeader from '@/components/organisms/DashboardHeader'
import NavigationBar from '@/components/organisms/NavigationBar'
import { DASHBOARD1, LOGOUT, NavigatonItems } from '@/strings/constant'
import { Stack } from '@mui/material'
import avatar from '@Assets/icons/avatar.svg'
import Footer from '@/components/molecules/Footer'
import theme from '@/theme'
import { useAuth0 } from '@auth0/auth0-react'

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
  const { logout } = useAuth0()

  const handleOnClick = (value: string) => {
    switch (value) {
      case DASHBOARD1:
        // Navigate to dashboard page
        // Will implement later at the time of page integration
        break
      case LOGOUT:
        logout()
        break
      default:
        // Navigate to home page
        // Will implement later at the time of page integration
        break
    }
  }
  return (
    <Stack
      direction="row"
      sx={{ background: theme.palette.primary[100] }}
      overflow="none"
      boxSizing="border-box"
      height="100vh"
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
