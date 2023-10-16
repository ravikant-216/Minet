import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SignUp from '.'
import { LOGIN } from '@/strings/constant'

describe('SignUp Component', () => {
  const iconClick = jest.fn()
  const signUpClick = jest.fn()
  const signInClick = jest.fn()

  beforeEach(() => {
    render(
      <SignUp
        onIconClick={iconClick}
        onSignUp={signUpClick}
        onSignIn={signInClick}
      />
    )
  })

  it('renders without errors', () => {
    expect(screen.getByTestId('sign-up')).toBeInTheDocument()
    fireEvent.click(screen.getByText(LOGIN))
    expect(signInClick).toHaveBeenCalledTimes(1)
  })

  it('displays the correct details', () => {
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
    expect(screen.getByText('Already have an account?')).toBeInTheDocument()
  })

  it('disables Sign Up button when fields are empty', () => {
    const nameInput = screen.getByPlaceholderText('Eg: John Doe')
    const emailInput = screen.getByPlaceholderText('you@company.com')
    const passwordInput = screen.getByPlaceholderText('Create Password')
    const signUpButton = screen.getByRole('button', { name: 'Sign Up' })

    expect(signUpButton).toBeInTheDocument()
    expect(signUpButton).toBeDisabled()

    fireEvent.change(nameInput, { target: { value: 'John' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Password@123' } })

    expect(signUpButton).toBeEnabled()
    fireEvent.click(signUpButton)
    expect(signUpClick).toHaveBeenCalledTimes(1)
  })

  it('shows error messages for invalid name, email, and password', () => {
    const nameInput = screen.getByPlaceholderText('Eg: John Doe')
    const emailInput = screen.getByPlaceholderText('you@company.com')
    const passwordInput = screen.getByPlaceholderText('Create Password')

    fireEvent.change(nameInput, { target: { value: 'abc' } })
    fireEvent.change(emailInput, { target: { value: 'test.com' } })
    fireEvent.change(passwordInput, { target: { value: 'weak' } })

    expect(screen.getByText('Invalid username')).toBeInTheDocument()
    expect(screen.getByText('Invalid email format')).toBeInTheDocument()
    expect(
      screen.getByText('Password should have at least 8 characters.')
    ).toBeInTheDocument()
  })

  it('handles changes in name, email, and password fields', () => {
    const nameInput = screen.getByPlaceholderText('Eg: John Doe')
    const emailInput = screen.getByPlaceholderText('you@company.com')
    const passwordInput = screen.getByPlaceholderText('Create Password')

    fireEvent.change(nameInput, { target: { value: 'John' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'Password@123' } })

    expect(nameInput).toHaveValue('John')
    expect(emailInput).toHaveValue('test@example.com')
    expect(passwordInput).toHaveValue('Password@123')
  })
})
