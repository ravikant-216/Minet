import { render, fireEvent } from '@testing-library/react'
import TradingTemplate from '.'

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
  })
})
