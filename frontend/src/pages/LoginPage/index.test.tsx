/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import LoginPage from '.'
import { checkUser } from '@/api/api'
import { EMAIL_PLACEHOLDER, PASSWORD_ENTER } from '@/strings/constant'
import * as Router from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import * as authContext from '@/context/AuthContext'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}))
jest.mock('@/api/api', () => ({
  checkUser: jest.fn(),
}))

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn(),
  }),
}))

describe('LoginPage component', () => {
  const fn = jest.fn()
  jest.spyOn(authContext, 'useAuthContext').mockReturnValue({
    setUser: fn
  } as any)

  test('handles successful sign-in', async () => {
    const mockResponse = [
      {
        id: 'b62177be-aca1-45d3-ab0e-60a9f4c79a5e',
        name: 'John Doe',
        email: 'john@gmail.com',
        password: 'JohnDoe@001',
        balance: 34000,
      },
    ]

      ; (checkUser as jest.Mock).mockResolvedValue({ data: mockResponse })

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    const passwordInput = screen.getByPlaceholderText(PASSWORD_ENTER)
    const signInButton = screen.getByRole('button', { name: 'Sign In' })

    fireEvent.change(emailInput, { target: { value: 'majahar@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Test@1234' } })
    fireEvent.click(signInButton)
  })

  test('handles failed sign-in', async () => {
    ; (checkUser as jest.Mock).mockRejectedValue(new Error('Simulated error'))

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    const passwordInput = screen.getByPlaceholderText(PASSWORD_ENTER)
    const signInButton = screen.getByRole('button', { name: 'Sign In' })

    fireEvent.change(emailInput, { target: { value: 'majahar@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Test@123456' } })
    fireEvent.click(signInButton)
  })

  test('handle Google Login', async () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )

    const google = screen.getByText('Google')
    fireEvent.click(google)
  })
  test('handle Forgot Password', async () => {
    const navigateMock = jest.fn()
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateMock)
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )

    const forgotPasswordLink = screen.getByText('Forgot Password')
    fireEvent.click(forgotPasswordLink)
  })

  test('handle Signup', async () => {
    const navigateMock = jest.fn()
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateMock)
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )

    const signupLink = screen.getByText('Signup')
    fireEvent.click(signupLink)
  })
})
