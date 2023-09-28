import { fireEvent, render, screen } from '@testing-library/react'
import SocialLoginButton from '.'
import GoogleIcon from '@Assets/icons/google.svg'

describe('SocialLoginButton', () => {
  test('renders SocialLoginButton component', () => {
    render(<SocialLoginButton src={GoogleIcon} name="Google" />)
    screen.getByAltText('Google')
  })

  test('Check on click working or not', () => {
    const onClick = jest.fn()
    render(
      <SocialLoginButton src={GoogleIcon} name="Google" onClick={onClick} />
    )
    const googleIcon = screen.getByAltText('Google')
    fireEvent.click(googleIcon)
    expect(onClick).toHaveBeenCalled()
    render(<SocialLoginButton src={GoogleIcon} name="Google" />)
  })
})
