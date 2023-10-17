import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SignUpPage from '.'
import {
  NAME_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  CREATE_PASSWORD_PLACEHOLDER,
  LOGIN,
} from '@/strings/constant'
import { addUser } from '@/api/api'
import { BrowserRouter } from 'react-router-dom'
import * as Router from 'react-router'

const navigateMock = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}))

jest.mock('@/api/api', () => ({
  addUser: jest.fn(),
}))
jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateMock)

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

    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )

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

    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )

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
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )

    const google = screen.getByText('Google')
    fireEvent.click(google)
  })

  test('handles Sign in click', async () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )

    fireEvent.click(screen.getByText(LOGIN))
  })
  test('handles Unsuccessful sign-up', async () => {
    const mockResponse = false

    ;(addUser as jest.Mock).mockResolvedValue(mockResponse)

    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )

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
})
