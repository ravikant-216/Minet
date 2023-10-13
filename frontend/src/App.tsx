import { ThemeProvider } from '@emotion/react'
import './App.css'
import { addAuthUser } from './api/api'
import { useAuth0 } from '@auth0/auth0-react'
import theme from './theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import TradePage from './pages/TradePage'

export const App = () => {
  const { isAuthenticated, user } = useAuth0()

  if (isAuthenticated && user && user.name && user.email) {
    addAuthUser(user.name, user.email, 'Test@1234')
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/trade" element={<TradePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
