import React, { useState } from 'react'
import AuthTemplate from '@/components/templates/AuthTemplate'
import LoginImage from '@Assets/images/Login.svg'
import ResetPasswordForm from '@/components/organisms/ResetPasswordForm'
import { Box } from '@mui/material'
import { userDataType } from '@/utils/types'
import { updatePassword } from '@/api/api'
import { useNavigate } from 'react-router-dom'

const ResetPasswordPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState<number>(1)
  const handleNewPassword = async (newPassword: string) => {
    try {
      const userDataString = localStorage.getItem('user')

      if (userDataString) {
        const userData: userDataType[] = JSON.parse(userDataString)
        const userId = userData[0].id
        const password = userData[0].password

        if (password !== newPassword) {
          await updatePassword(newPassword, userId)
          setStep(2)
        } else {
          window.alert('Please change your password')
        }
      } else {
        console.error('User data not found in localStorage')
      }
    } catch (err) {
      console.error(err)
    }
  }
  const handleNavigation = () => {
    navigate('/')
  }

  return (
    <Box data-testid="signup-page">
      <AuthTemplate
        image={LoginImage}
        data={
          <ResetPasswordForm
            onSubmit={handleNewPassword}
            onSuccess={handleNavigation}
            step={step}
          />
        }
      />
    </Box>
  )
}

export default ResetPasswordPage
