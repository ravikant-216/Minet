import { ThemeProvider } from '@emotion/react'
import './App.css'
import theme from './theme'
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import TradePage from './pages/TradePage'
import ForgotPasswordPage from './pages/ForgetPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import DashBoardPage from './pages/DashBoardPage'
import PaymentPage from './pages/PaymentPage'
import AuthProvider, { useAuthContext } from './context/AuthContext'
import DetailPage from './pages/DetailPage'
import PurchagePage from './pages/PurchasePage'
import SellPage from './pages/SellPage'
import CashWalletScreen from './pages/CashWalletScreen'

export const comparator = (
  isAuthenticated: boolean,
  c1: React.ReactNode,
  c2: React.ReactNode
): React.ReactNode => {
  return isAuthenticated ? c1 : c2
}

const AuthRoutes = () => {
  const { isAuthenticated } = useAuthContext()
  if (isAuthenticated) {
    return <Outlet />
  }
  return <Navigate to="/login" />
}

const UnAuthRoutes = () => {
  const { isAuthenticated } = useAuthContext()

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />
  }
  return <Outlet />
}

const routers = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoutes />,
    children: [
      {
        path: 'trade',
        element: <TradePage />,
      },
      {
        path: 'dashboard',
        element: <DashBoardPage />,
      },
      {
        path: 'payment-success',
        element: <PaymentPage />,
      },
      {
        path: 'detail/:cryptoId',
        element: <DetailPage />,
      },
      {
        path: 'purchase',
        element: <PurchagePage />,
      },
      {
        path: 'sell',
        element: <SellPage />,
      },
      {
        path: 'cash-wallet',
        element: <CashWalletScreen />,
      },
    ],
  },
  {
    path: '/',
    element: <UnAuthRoutes />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },

      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'reset-password',
        element: <ResetPasswordPage />,
      },
    ],
  },
])

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routers} />
      </ThemeProvider>
    </AuthProvider>
  )
}
