import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LoginImage from '@Assets/images/Login.svg'
import LoginForm from '@Components/organisms/LogInForm'
import AuthTemplate from '.'
import { SIGN_UP } from '@/strings/constant'

describe('Auth Template', () => {
  const iconClick = jest.fn()
  const signInClick = jest.fn()
  it('render login Page with Auth Template', () => {
    render(
      <AuthTemplate
        image={LoginImage}
        data={<LoginForm onIconClick={iconClick} onSignIn={signInClick} />}
      />
    )
    expect(screen.getByAltText('Image')).toBeInTheDocument()
    expect(screen.getByTestId('log-in')).toBeInTheDocument()
    expect(screen.getByText('Login to Minet')).toBeInTheDocument()
    expect(screen.getByText(SIGN_UP)).toBeInTheDocument()
    const google = screen.getByText('Google')
    fireEvent.click(google)
    expect(iconClick).toHaveBeenCalledTimes(1)
  })
})
