import React from 'react'
import AuthTemplate from '@/components/templates/AuthTemplate'
import LoginImage from '@Assets/images/Login.svg'
import LogInForm from '@/components/organisms/LogInForm'
import { Box } from '@mui/material'
import { checkUser } from '@/api/api'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/context/AuthContext'

const LoginPage = () => {
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  const { setUser } = useAuthContext()
  const handleSignIn = async (email: string, password: string) => {
    try {
      const response = await checkUser(email, password)
      if (response) {
        localStorage.setItem('user', JSON.stringify(response.data))
        setUser(response.data)
        navigate('/dashboard')
      } else {
        window.alert('Check your email and password')
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
        screen_hint: 'login',
      },
    })
  }
  return (
    <Box data-testid="login-page">
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
