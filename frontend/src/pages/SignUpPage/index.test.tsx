import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SignUpPage from '.'
import {
  NAME_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  CREATE_PASSWORD_PLACEHOLDER,
} from '@/strings/constant'
import { addUser } from '@/api/api'

jest.mock('@/api/api', () => ({
  addUser: jest.fn(),
}))

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn(),
  }),
}))

describe('SignUpPage component', () => {
  test('handles successful sign-up', async () => {
    const mockResponse = {
      balance: 50000,
      email: 'temp@gmail.com',
      id: '62ac0a01-3794-4cb2-9cd1-ecb1efae2d4d',
      name: 'temp',
      password: 'Test@123',
    }

    ;(addUser as jest.Mock).mockResolvedValue(mockResponse)

    render(<SignUpPage />)

    const nameInput = screen.getByPlaceholderText(NAME_PLACEHOLDER)
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    const passwordInput = screen.getByPlaceholderText(
      CREATE_PASSWORD_PLACEHOLDER
    )
    const signUpButton = screen.getByRole('button', { name: 'Sign Up' })

    fireEvent.change(nameInput, { target: { value: 'temp' } })
    fireEvent.change(emailInput, { target: { value: 'temp@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Test@123' } })
    fireEvent.click(signUpButton)
  })

  test('handles failed sign-up', async () => {
    ;(addUser as jest.Mock).mockRejectedValue(new Error('Simulated error'))

    render(<SignUpPage />)

    const nameInput = screen.getByPlaceholderText(NAME_PLACEHOLDER)
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER)
    const passwordInput = screen.getByPlaceholderText(
      CREATE_PASSWORD_PLACEHOLDER
    )
    const signUpButton = screen.getByRole('button', { name: 'Sign Up' })

    fireEvent.change(nameInput, { target: { value: 'temp' } })
    fireEvent.change(emailInput, { target: { value: 'temp@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Test@123' } })
    fireEvent.click(signUpButton)
  })

  test('handle Google Login', async () => {
    render(<SignUpPage />)

    const google = screen.getByText('Google')
    fireEvent.click(google)
  })
})
