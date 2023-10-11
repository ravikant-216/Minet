import React, { useState } from 'react'
import AuthTemplate from '@/components/templates/AuthTemplate'
import LoginImage from '@Assets/images/Login.svg'
import { Box } from '@mui/material'
import ForgotPasswordForm from '@/components/organisms/ForgotPasswordForm'
import { checkUserByEmail } from '@/api/api'

const ForgotPasswordPage = () => {
  const [step, setStep] = useState<number>(1)
  const handleEmail = async (email: string) => {
    try {
      const response = await checkUserByEmail(email)
      if (response.data.length > 0) {
        localStorage.setItem('user', response.data)
        setStep(2)
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleLogin = () => {
    // Navigate to  the login page
  }
  const handleNavigation = () => {
    // Navigate to Reset Password
  }
  return (
    <Box data-testId="forgot-page">
      <AuthTemplate
        image={LoginImage}
        data={
          <ForgotPasswordForm
            loginOnClick={handleLogin}
            onSubmit={handleEmail}
            onSuccess={handleNavigation}
            step={step}
          />
        }
      />
    </Box>
  )
}

export default ForgotPasswordPage
