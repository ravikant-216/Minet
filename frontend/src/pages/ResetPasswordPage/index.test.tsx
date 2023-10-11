import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ResetPasswordPage from '.'
import { updatePassword } from '@/api/api'

jest.mock('@/api/api', () => ({
  updatePassword: jest.fn(),
}))

describe('ResetPasswordPage component', () => {
  test('handles new password submission and success', async () => {
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

    render(<ResetPasswordPage />)

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
    const userData = {
      id: 'user123',
      password: 'oldPassword@123',
    }
    const userDataString = JSON.stringify(userData)
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
    setItemSpy.mockReturnValue()
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem')
    getItemSpy.mockReturnValue(userDataString)

    render(<ResetPasswordPage />)

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

    render(<ResetPasswordPage />)

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

    render(<ResetPasswordPage />)

    const passwordInput = screen.getByPlaceholderText('Enter Password')
    const confirmPasswordInput =
      screen.getByPlaceholderText('Re-Enter Password')

    fireEvent.change(passwordInput, { target: { value: 'newPassword@123' } })
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'newPassword@123' },
    })
    fireEvent.click(screen.getByTestId('button'))
  })
})
