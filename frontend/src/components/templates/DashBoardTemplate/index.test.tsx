import { render, screen, fireEvent } from '@testing-library/react'
import DashBoardTemplate from '.'
import { useAuth0 } from '@auth0/auth0-react'
import { LOGOUT } from '@/strings/constant'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(),
}))

const logoutMock = jest.fn()
;(useAuth0 as jest.Mock).mockReturnValue({
  logout: logoutMock,
})
describe('DashBoardTemplate', () => {
  test('renders DashBoardTemplate component', () => {
    render(
      <DashBoardTemplate title="home">
        <div>Hi</div>
      </DashBoardTemplate>
    )

    expect(screen.getByText('Hi')).toBeInTheDocument()
    expect(screen.getByText('home')).toBeInTheDocument()
    fireEvent.click(screen.getByAltText('home'))
    fireEvent.click(screen.getByAltText('dashboard'))

    const logoutButton = screen.getByAltText(LOGOUT)
    fireEvent.click(logoutButton)
  })
})
