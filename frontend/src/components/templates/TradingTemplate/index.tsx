import React, { ReactNode } from 'react'
import { Box, Stack } from '@mui/material'
import NavigationBar from '@/components/organisms/NavigationBar'
import Dashboard from '@/components/organisms/DashboardHeader'
import Footer from '@/components/molecules/Footer'
import {
  NavigatonItems,
  DASHBOARD1,
  PORTFOLIO,
  TRADE,
  NOTIFICATION,
  LOGOUT,
} from '@/strings/constant'
import avatar from '@Assets/icons/avatar.svg'
import theme from '@/theme'

export interface TradingTemplateProps {
  children: ReactNode
  dashboardHeading: string
  isButton: boolean
}

const TradingTemplate: React.FC<TradingTemplateProps> = ({
  children,
  dashboardHeading,
  isButton,
}) => {
  const handleNavigation = (value: string) => {
    switch (value) {
      case DASHBOARD1:
        // Navigate to dashboard page
        // Will implement later at the time of page integration
        break
      case PORTFOLIO:
        // Navigate to portfolio page
        // Will implement later at the time of page integration
        break
      case TRADE:
        // Navigate to trade page
        // Will implement later at the time of page integration
        break
      case NOTIFICATION:
        // Navigate to notification page
        // Will implement later at the time of page integration
        break
      case LOGOUT:
        // Handle logout
        // Will implement later at the time of page integration
        break
      default:
        // Navigate to home page
        // Will implement later at the time of page integration
        break
    }
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
      <Box sx={{ width: theme.spacing(20), minHeight: '100vh' }}>
        <NavigationBar
          navigationItems={NavigatonItems}
          handleOnClick={handleNavigation}
        />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ height: theme.spacing(20) }}>
          <Dashboard
            dashboardHeading={dashboardHeading}
            avatar={avatar}
            isButton={isButton}
            onBuy={() => {
              // Will implement later at the time of page integration
            }}
            onSell={() => {
              // Will implement later at the time of page integration
            }}
          />
        </Box>
        <Box sx={{ flex: 1, overflowY: 'auto' }}>{children}</Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Stack width={'100%'}>
            <Footer
              width={'100%'}
              position={'static'}
              padding={theme.spacing(6)}
              marginLeft={theme.spacing(-8)}
              paddingRight={0}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default TradingTemplate
