import React from 'react'
import AuthTemplate from '@/components/templates/AuthTemplate'
import LoginImage from '@Assets/images/Login.svg'
import LogInForm from '@/components/organisms/LogInForm'
import { Box } from '@mui/material'
import { checkUser } from '@/api/api'
import { useAuth0 } from '@auth0/auth0-react'
import { User } from '@/utils/types'
import { useNavigate } from 'react-router-dom'

interface LoginPageProps {
  setUser: (user: User) => void
}

const LoginPage = ({ setUser }: LoginPageProps) => {
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  const handleSignIn = async (email: string, password: string) => {
    try {
      const response = await checkUser(email, password)
      if (Array.isArray(response.data) && response.data.length > 0) {
        localStorage.setItem('user', JSON.stringify(response.data[0]))
        setUser(response.data[0])
        navigate('/dashboard')
      }
    } catch (err) {
      console.error(err)
    }
  }
  const handleForgotPassword = () => {
    navigate('/forgot-password')
  }
  const handleSignup = () => {
    navigate('/sign-up')
  }
  const handleGoogleLogin = async () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'google-oauth2',
      },
    })
  }
  return (
    <Box data-testId="login-page">
      <AuthTemplate
        image={LoginImage}
        data={
          <LogInForm
            onSignIn={handleSignIn}
            onIconClick={handleGoogleLogin}
            onForgotPassword={handleForgotPassword}
            onSignup={handleSignup}
          />
        }
      />
    </Box>
  )
}

export default LoginPage
