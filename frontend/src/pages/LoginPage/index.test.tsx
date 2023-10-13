import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import LoginPage from '.'
import { checkUser } from '@/api/api'
import { EMAIL_PLACEHOLDER, PASSWORD_ENTER } from '@/strings/constant'

jest.mock('@/api/api', () => ({
  checkUser: jest.fn(),
}))

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn(),
  }),
}))

describe('LoginPage component', () => {
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

    ;(checkUser as jest.Mock).mockResolvedValue({ data: mockResponse })

    render(<LoginPage />)
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    const passwordInput = screen.getByPlaceholderText(PASSWORD_ENTER)
    const signInButton = screen.getByRole('button', { name: 'Sign in' })

    fireEvent.change(emailInput, { target: { value: 'majahar@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Test@1234' } })
    fireEvent.click(signInButton)
  })

  test('handles failed sign-in', async () => {
    ;(checkUser as jest.Mock).mockRejectedValue(new Error('Simulated error'))

    render(<LoginPage />)

    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    const passwordInput = screen.getByPlaceholderText(PASSWORD_ENTER)
    const signInButton = screen.getByRole('button', { name: 'Sign in' })

    fireEvent.change(emailInput, { target: { value: 'majahar@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Test@123456' } })
    fireEvent.click(signInButton)
  })

  test('handle Google Login', async () => {
    render(<LoginPage />)

    const google = screen.getByText('Google')
    fireEvent.click(google)
  })
})
