import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import LogIn from '.'
import {
  IN_VALID_EMAIL,
  PasswordValidationMessage,
  SIGN_UP,
} from '@/strings/constant'

describe('LogIn Component', () => {
  const iconClick = jest.fn()
  const signInClick = jest.fn()
  beforeEach(() => {
    render(<LogIn onIconClick={iconClick} onSignIn={signInClick} />)
  })

  it('renders without errors', () => {
    expect(screen.getByTestId('log-in')).toBeInTheDocument()
  })

  it('displays the correct details', () => {
    expect(screen.getByText('Login to Minet')).toBeInTheDocument()
    expect(screen.getByText(SIGN_UP)).toBeInTheDocument()
    const google = screen.getByText('Google')
    fireEvent.click(google)
    expect(iconClick).toHaveBeenCalledTimes(1)
  })

  it('disables Sign In button when fields are empty', () => {
    const emailInput = screen.getByPlaceholderText('you@company.com')
    const passwordInput = screen.getByPlaceholderText('Enter Password')
    const signInButton = screen.getByRole('button', { name: 'Sign in' })

    expect(signInButton).toBeInTheDocument()
    expect(signInButton).toBeDisabled()

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Password@123' } })

    expect(signInButton).toBeEnabled()
    fireEvent.click(signInButton)
    expect(signInClick).toHaveBeenCalledTimes(1)
  })

  it('shows error messages for invalid email and password', () => {
    const emailInput = screen.getByPlaceholderText('you@company.com')
    const passwordInput = screen.getByPlaceholderText('Enter Password')

    fireEvent.change(emailInput, { target: { value: 'tes.com' } })
    fireEvent.change(passwordInput, { target: { value: 'weak' } })

    expect(screen.getByText(IN_VALID_EMAIL)).toBeInTheDocument()
    expect(
      screen.getByText(PasswordValidationMessage.MESSAGE_MIN_LENGTH)
    ).toBeInTheDocument()
  })

  it('handles changes in email and password fields', () => {
    const emailInput = screen.getByPlaceholderText('you@company.com')
    const passwordInput = screen.getByPlaceholderText('Enter Password')

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    expect(emailInput).toHaveValue('test@example.com')
    expect(passwordInput).toHaveValue('password123')
  })
})
