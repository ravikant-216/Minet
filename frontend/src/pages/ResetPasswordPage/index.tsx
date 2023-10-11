import React, { useState } from 'react'
import AuthTemplate from '@/components/templates/AuthTemplate'
import LoginImage from '@Assets/images/Login.svg'
import ResetPasswordForm from '@/components/organisms/ResetPasswordForm'
import { Box } from '@mui/material'
import { userDataType } from '@/utils/types'
import { updatePassword } from '@/api/api'

const ResetPasswordPage = () => {
  const [step, setStep] = useState<number>(1)
  const handleNewPassword = async (newPassword: string) => {
    try {
      const userDataString = localStorage.getItem('user')

      if (userDataString) {
        const userData: userDataType = JSON.parse(userDataString)
        const userId = userData.id
        const password = userData.password

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

  return (
    <Box data-testId="signup-page">
      <AuthTemplate
        image={LoginImage}
        data={<ResetPasswordForm onSubmit={handleNewPassword} step={step} />}
      />
    </Box>
  )
}

export default ResetPasswordPage
