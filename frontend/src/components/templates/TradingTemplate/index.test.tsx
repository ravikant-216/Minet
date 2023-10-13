import { render, fireEvent } from '@testing-library/react'
import TradingTemplate from '.'
import { useAuth0 } from '@auth0/auth0-react'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(),
}))

const logoutMock = jest.fn()
;(useAuth0 as jest.Mock).mockReturnValue({
  logout: logoutMock,
})
describe('TradingTemplate', () => {
  const dashboardHeading = 'Dashboard Heading'
  const isButton = true
  const children = <div>Body</div>

  it('renders correctly', () => {
    const { getByText } = render(
      <TradingTemplate dashboardHeading={dashboardHeading} isButton={isButton}>
        {children}
      </TradingTemplate>
    )

    expect(getByText(dashboardHeading)).toBeInTheDocument()
    expect(getByText('Body')).toBeInTheDocument()
  })
  it('calls handleNavigation when a navigation item is clicked', () => {
    const { getByAltText, getByText } = render(
      <TradingTemplate dashboardHeading={dashboardHeading} isButton={isButton}>
        {children}
      </TradingTemplate>
    )

    fireEvent.click(getByAltText('home'))
    fireEvent.click(getByAltText('dashboard'))
    fireEvent.click(getByAltText('portfolio'))
    fireEvent.click(getByAltText('trade'))
    fireEvent.click(getByAltText('logout'))
    fireEvent.click(getByAltText('notification'))
    expect(getByText('Body')).toBeInTheDocument()
    expect(logoutMock).toHaveBeenCalledTimes(1)
  })
})
