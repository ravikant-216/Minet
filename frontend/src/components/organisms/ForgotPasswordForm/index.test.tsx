import { render, fireEvent, screen } from '@testing-library/react'
import ForgotPasswordForm from '.'

describe('ForgotPasswordForm', () => {
  it('renders correctly', () => {
    const mockOnSuccess = jest.fn()
    const { getByPlaceholderText } = render(
      <ForgotPasswordForm
        loginOnClick={() => {}}
        step={2}
        onSuccess={mockOnSuccess}
      />
    )
    expect(screen.getByTestId('button')).toBeDisabled()
    fireEvent.change(getByPlaceholderText('8 digits code'), {
      target: { value: '123456' },
    })
    expect(screen.getByTestId('button')).toBeDisabled()
    fireEvent.change(getByPlaceholderText('8 digits code'), {
      target: { value: '12345678' },
    })
    expect(screen.getByTestId('button')).not.toBeDisabled()
    fireEvent.click(screen.getByTestId('button'))
    expect(mockOnSuccess).toBeCalled()
  })

  it('enables the button when email is valid', () => {
    const mockOnSubmit = jest.fn()
    const mockLoginOnClick = jest.fn()
    const { getByPlaceholderText } = render(
      <ForgotPasswordForm
        loginOnClick={mockLoginOnClick}
        onSubmit={mockOnSubmit}
      />
    )
    expect(screen.getByTestId('button')).toBeDisabled()
    fireEvent.click(screen.getByText('Login'))
    expect(mockLoginOnClick).toBeCalled()
    fireEvent.change(getByPlaceholderText('you@company.com'), {
      target: { value: 'test@example.com' },
    })
    expect(screen.getByTestId('button')).not.toBeDisabled()
    fireEvent.click(screen.getByTestId('button'))
    expect(mockOnSubmit).toBeCalledWith('test@example.com')
  })
})
