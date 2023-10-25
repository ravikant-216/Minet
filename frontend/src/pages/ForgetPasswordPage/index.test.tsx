import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ForgotPassword from '.'
import { checkUserByEmail } from '@/api/api'
import * as Router from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const navigateMock = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}))
jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateMock)

jest.mock('@/api/api', () => ({
  checkUserByEmail: jest.fn(),
}))

describe('ForgotPassword component', () => {
  test('renders the ForgotPassword component', () => {
    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )
  })

  test('handles email submission and success', async () => {
    const mockResponse = {
      data: [
        {
          balance: 34000,
          email: 'john@gmail.com',
          id: 'b62177be-aca1-45d3-ab0e-60a9f4c79a5e',
          name: 'John Doe',
          password: 'JohnDoe@001',
        },
      ],
    }

    ;(checkUserByEmail as jest.Mock).mockResolvedValue(mockResponse)

    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('you@company.com')
    const submitButton = screen.getByText('Send Reset Link')

    fireEvent.change(emailInput, { target: { value: 'john@gmail.com' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(checkUserByEmail).toHaveBeenCalledWith('john@gmail.com')
    })

    fireEvent.change(screen.getByPlaceholderText('8 digits code'), {
      target: { value: '12345678' },
    })
    expect(screen.getByTestId('button')).not.toBeDisabled()
    fireEvent.click(screen.getByTestId('button'))
  })

  test('handles email submission and no user found', async () => {
    const mockResponse = false

    ;(checkUserByEmail as jest.Mock).mockResolvedValue(mockResponse)

    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('you@company.com')
    const submitButton = screen.getByText('Send Reset Link')

    fireEvent.change(emailInput, {
      target: { value: 'nonexistent@example.com' },
    })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(checkUserByEmail).toHaveBeenCalledWith('nonexistent@example.com')
    })
  })

  test('handles email submission and error', async () => {
    const errorMessage = 'Simulated error'

    ;(checkUserByEmail as jest.Mock).mockRejectedValue(new Error(errorMessage))

    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('you@company.com')
    const submitButton = screen.getByText('Send Reset Link')

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(checkUserByEmail).toHaveBeenCalledWith('test@example.com')
    })
  })

  test('handles login click', () => {
    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )

    const loginButton = screen.getByText('Login')

    fireEvent.click(loginButton)
  })
})
