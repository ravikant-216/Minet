import { ThemeProvider } from '@emotion/react'
import './App.css'
import theme from './theme'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import TradePage from './pages/TradePage'
import ForgotPasswordPage from './pages/ForgetPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import DashBoardPage from './pages/DashBoardPage'
import PaymentPage from './pages/PaymentPage'
import DetailPage from './pages/DetailPage'
import PurchagePage from './pages/PurchasePage'
import CashWalletScreen from './pages/CashWalletScreen'
import SellPage from './pages/SellPage'
import { useEffect, useState } from 'react'
import { User } from './utils/types'
import { useAuth0 } from '@auth0/auth0-react'

export const comparator = (
  isAuthenticated: boolean,
  c1: React.ReactNode,
  c2: React.ReactNode
): React.ReactNode => {
  return isAuthenticated ? c1 : c2
}

export const App = () => {
  const [user, setUser] = useState<User | undefined>()
  const { isAuthenticated } = useAuth0()

  useEffect(() => {
    const userDataString = localStorage.getItem('user')
    if (userDataString) {
      const newUser = JSON.parse(userDataString)
      setUser(newUser)
    }
  }, [])

  const currentUser = user as User

  const router = createBrowserRouter([
    {
      path: '/',
      element: comparator(
        isAuthenticated,
        <DashBoardPage user={currentUser} />,
        <LoginPage setUser={setUser} />
      ),
    },
    {
      path: '/sign-up',
      element: <SignUpPage />,
    },
    {
      path: '/trade',
      element: <TradePage />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPasswordPage />,
    },
    {
      path: '/reset-password',
      element: <ResetPasswordPage />,
    },
    {
      path: '/dashboard',
      element: <DashBoardPage user={currentUser} />,
    },
    {
      path: '/success',
      element: <PaymentPage />,
    },
    {
      path: '/detail/:cryptoId',
      element: <DetailPage userId={currentUser?.id} />,
    },
    {
      path: '/purchase',
      element: <PurchagePage user={currentUser} />,
    },
    {
      path: '/sell',
      element: <SellPage user={currentUser} />,
    },
    {
      path: '/cash-wallet',
      element: <CashWalletScreen id={currentUser?.id} />,
    },
  ])

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
