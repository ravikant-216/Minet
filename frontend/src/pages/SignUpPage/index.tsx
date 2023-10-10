import React from 'react'
import AuthTemplate from '@/components/templates/AuthTemplate'
import SignUpImage from '@Assets/images/SignUp.svg'
import SignUpForm from '@/components/organisms/SignUpForm'
import { Box } from '@mui/material'
import { addUser } from '@/api/api'

const SignUpPage = () => {
  const handleSignIn = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      await addUser(name, email, password)
      // navigate to Home page and handle response data
    } catch (err) {
      // console.error(err)
    }
  }
  const handleGoogleLogin = async () => {
    // navigate to Home page
  }
  return (
    <Box data-testId="signup-page">
      <AuthTemplate
        image={SignUpImage}
        data={
          <SignUpForm onSignUp={handleSignIn} onIconClick={handleGoogleLogin} />
        }
      />
    </Box>
  )
}

export default SignUpPage
