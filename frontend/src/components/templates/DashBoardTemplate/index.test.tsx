import { render, screen, fireEvent } from '@testing-library/react'
import DashBoardTemplate from '.'
import { useAuth0 } from '@auth0/auth0-react'
import { LOGOUT } from '@/strings/constant'
import * as Router from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const navigateMock = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}))

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
      <BrowserRouter>
        <DashBoardTemplate title="home">
          <div>Hi</div>
        </DashBoardTemplate>
      </BrowserRouter>
    )

    expect(screen.getByText('Hi')).toBeInTheDocument()
    expect(screen.getByText('home')).toBeInTheDocument()
    fireEvent.click(screen.getByAltText('home'))
    fireEvent.click(screen.getByAltText('dashboard'))

    const logoutButton = screen.getByAltText(LOGOUT)
    fireEvent.click(logoutButton)
  })
  test('should navigate', () => {
    jest.spyOn(Router, 'useNavigate').mockImplementation(() => navigateMock)
    render(
      <BrowserRouter>
        <DashBoardTemplate title="home">
          <div>Hi</div>
        </DashBoardTemplate>
      </BrowserRouter>
    )

    expect(screen.getByText('BUY')).toBeInTheDocument()
    expect(screen.getByText('SELL')).toBeInTheDocument()
    fireEvent.click(screen.getByText('BUY'))
  })
})
