import React from 'react'
import AuthTemplate from '@/components/templates/AuthTemplate'
import SignUpImage from '@Assets/images/SignUp.svg'
import SignUpForm from '@/components/organisms/SignUpForm'
import { Box } from '@mui/material'
import { addUser } from '@/api/api'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await addUser(name, email, password)
      if (res) {
        navigate('/')
      } else {
        window.alert('User already exists')
      }
    } catch (err) {
      // console.error(err)
    }
  }

  const handleSignin = () => {
    navigate('/')
  }
  const handleGoogleLogin = async () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'google-oauth2',
      },
    })
  }
  return (
    <Box data-testId="signup-page">
      <AuthTemplate
        image={SignUpImage}
        data={
          <SignUpForm
            onSignUp={handleSignUp}
            onIconClick={handleGoogleLogin}
            onSignIn={handleSignin}
          />
        }
      />
    </Box>
  )
}

export default SignUpPage
