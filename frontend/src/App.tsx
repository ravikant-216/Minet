import './App.css'
import LoginPage from '@/pages/LoginPage'
import { ThemeProvider } from '@emotion/react'
import theme from '@/theme/index'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  )
}
