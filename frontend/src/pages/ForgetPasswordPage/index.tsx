import React, { useState } from 'react'
import AuthTemplate from '@/components/templates/AuthTemplate'
import LoginImage from '@Assets/images/Login.svg'
import { Box } from '@mui/material'
import ForgotPasswordForm from '@/components/organisms/ForgotPasswordForm'
import { checkUserByEmail } from '@/api/api'
import { useNavigate } from 'react-router-dom'

const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState<number>(1)
  const handleEmail = async (email: string) => {
    try {
      const response = await checkUserByEmail(email)

      if (response) {
        localStorage.setItem('user', JSON.stringify(response.data))
        setStep(2)
      } else {
        window.alert('Email is not valid')
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleLogin = () => {
    navigate('/')
  }
  const handleNavigation = () => {
    navigate('/reset-password')
  }
  return (
    <Box data-testid="forgot-page">
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
