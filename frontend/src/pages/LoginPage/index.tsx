import React from 'react'
import AuthTemplate from '@/components/templates/AuthTemplate'
import LoginImage from '@Assets/images/Login.svg'
import LogInForm from '@/components/organisms/LogInForm'
import { Box } from '@mui/material'
import { checkUser } from '@/api/api'

const LoginPage = () => {
  const handleSignIn = async (email: string, password: string) => {
    try {
      const response = await checkUser(email, password)
      if (Array.isArray(response.data) && response.data.length > 0) {
        // navigate to Home page
      }
    } catch (err) {
      console.error(err)
    }
  }
  const handleGoogleLogin = async () => {
    // navigate to Home page
  }
  return (
    <Box data-testId="login-page">
      <AuthTemplate
        image={LoginImage}
        data={
          <LogInForm onSignIn={handleSignIn} onIconClick={handleGoogleLogin} />
        }
      />
    </Box>
  )
}

export default LoginPage
