import { render, fireEvent, screen } from '@testing-library/react'
import ResetPasswordForm from '.'

describe('ResetPasswordForm', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<ResetPasswordForm />)
    expect(
      getByText(
        'A min of 8 charaters with atleasr 1 special character and number included'
      )
    ).toBeInTheDocument()
  })

  it('validates password correctly', () => {
    const { getByPlaceholderText, getByText } = render(<ResetPasswordForm />)
    const passwordInput = getByPlaceholderText('Enter Password')
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    expect(getByText('Please enter a valid password')).toBeInTheDocument()
  })

  it('checks password confirmation correctly', () => {
    const { getByPlaceholderText, getByText } = render(<ResetPasswordForm />)
    const passwordInput = getByPlaceholderText('Enter Password')
    const confirmPasswordInput = getByPlaceholderText('Re-Enter Password')
    fireEvent.change(passwordInput, { target: { value: 'password1!' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'password2!' } })
    expect(getByText('Passwords do not match')).toBeInTheDocument()
  })

  it('calls onSubmit when passwords match and are valid', () => {
    const onSubmit = jest.fn()
    const { getByPlaceholderText } = render(
      <ResetPasswordForm onSubmit={onSubmit} />
    )
    const passwordInput = getByPlaceholderText('Enter Password')
    const confirmPasswordInput = getByPlaceholderText('Re-Enter Password')
    fireEvent.change(passwordInput, { target: { value: 'password1!' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'password1!' } })
    fireEvent.click(screen.getByTestId('button'))
    fireEvent.click(screen.getByTestId('button'))
    expect(onSubmit).toHaveBeenCalledWith('password1!')
  })
})
