import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ResetPasswordPage from '.'
import { updatePassword } from '@/api/api'
import { BrowserRouter } from 'react-router-dom'
import * as Router from 'react-router'

jest.mock('@/api/api', () => ({
  updatePassword: jest.fn(),
}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}))

describe('ResetPasswordPage component', () => {
  test('handles new password submission and success', async () => {
    const navigateMock = jest.fn()
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateMock)
    const userData = {
      id: 'user123',
      password: 'oldPassword@123',
    }

    const userDataString = JSON.stringify(userData)
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
    setItemSpy.mockReturnValue()
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem')
    getItemSpy.mockReturnValue(userDataString)

    const mockResponse = {}
    ;(updatePassword as jest.Mock).mockResolvedValue(mockResponse)

    render(
      <BrowserRouter>
        <ResetPasswordPage />
      </BrowserRouter>
    )

    const passwordInput = screen.getByPlaceholderText('Enter Password')
    const confirmPasswordInput =
      screen.getByPlaceholderText('Re-Enter Password')

    fireEvent.change(passwordInput, { target: { value: 'newPassword@123' } })
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'newPassword@123' },
    })
    fireEvent.click(screen.getByTestId('button'))

    expect(getItemSpy).toHaveBeenCalledWith('user')
    expect(updatePassword).toHaveBeenCalledWith('newPassword@123', 'user123')
  })

  test('handles new password submission and same password', async () => {
    const userData = [
      {
        id: 'user123',
        password: 'oldPassword@123',
      },
    ]
    const userDataString = JSON.stringify(userData)
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
    setItemSpy.mockReturnValue()
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem')
    getItemSpy.mockReturnValue(userDataString)

    render(
      <BrowserRouter>
        <ResetPasswordPage />
      </BrowserRouter>
    )

    const passwordInput = screen.getByPlaceholderText('Enter Password')
    const confirmPasswordInput =
      screen.getByPlaceholderText('Re-Enter Password')

    fireEvent.change(passwordInput, { target: { value: 'oldPassword@123' } })
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'oldPassword@123' },
    })
    fireEvent.click(screen.getByTestId('button'))
  })
  test('handles new password submission when user data is not found in localStorage', async () => {
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem')
    getItemSpy.mockReturnValue(null)

    render(
      <BrowserRouter>
        <ResetPasswordPage />
      </BrowserRouter>
    )

    const passwordInput = screen.getByPlaceholderText('Enter Password')
    const confirmPasswordInput =
      screen.getByPlaceholderText('Re-Enter Password')

    fireEvent.change(passwordInput, { target: { value: 'newPassword@123' } })
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'newPassword@123' },
    })
    fireEvent.click(screen.getByTestId('button'))
  })

  test('handles new password submission with an error', async () => {
    const userData = {
      id: 'user123',
      password: 'oldPassword',
    }
    const userDataString = JSON.stringify(userData)
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem')
    getItemSpy.mockReturnValue(userDataString)

    const errorMessage = 'Simulated error'
    ;(updatePassword as jest.Mock).mockRejectedValue(new Error(errorMessage))

    render(
      <BrowserRouter>
        <ResetPasswordPage />
      </BrowserRouter>
    )

    const passwordInput = screen.getByPlaceholderText('Enter Password')
    const confirmPasswordInput =
      screen.getByPlaceholderText('Re-Enter Password')

    fireEvent.change(passwordInput, { target: { value: 'newPassword@123' } })
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'newPassword@123' },
    })
    fireEvent.click(screen.getByTestId('button'))
  })
  test('handles navigation', async () => {
    const navigateMock = jest.fn()
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateMock)

    render(
      <BrowserRouter>
        <ResetPasswordPage />
      </BrowserRouter>
    )

    const passwordInput = screen.getByPlaceholderText('Enter Password')
    const confirmPasswordInput =
      screen.getByPlaceholderText('Re-Enter Password')

    fireEvent.change(passwordInput, { target: { value: 'newPassword@123' } })
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'newPassword@123' },
    })
    fireEvent.click(screen.getByTestId('button'))
    fireEvent.click(screen.getByTestId('button'))
  })
})
