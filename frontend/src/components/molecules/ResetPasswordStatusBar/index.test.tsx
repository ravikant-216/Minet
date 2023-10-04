import { render } from '@testing-library/react'
import ResetPasswordStatusBar from '.'
import {
  PASSWORD_RESET_INSTRUCTION,
  PASSWORD_RESET_SUCCESS,
} from '@/strings/constant'

describe('ResetPasswordStatusBar', () => {
  it('renders with success message and instruction', () => {
    const { getByAltText, getByText } = render(
      <ResetPasswordStatusBar width="300px" />
    )
    const successImage = getByAltText('password-sent')
    expect(successImage).toBeInTheDocument()

    const successMessage = getByText(PASSWORD_RESET_SUCCESS)
    expect(successMessage).toBeInTheDocument()

    const instructionMessage = getByText(PASSWORD_RESET_INSTRUCTION)
    expect(instructionMessage).toBeInTheDocument()
  })

  it('renders with the specified width', () => {
    const { container } = render(<ResetPasswordStatusBar width="400px" />)

    const wrapper = container.querySelector('.MuiStack-root')
    expect(wrapper).toHaveStyle('width: 400px')
  })
})
