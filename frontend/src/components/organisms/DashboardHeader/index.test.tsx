import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DashboardHeader from '.'
import avatar from '@Assets/icons/avatar.svg'
import { useAuth0 } from '@auth0/auth0-react'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(),
}))

const logoutMock = jest.fn()
;(useAuth0 as jest.Mock).mockReturnValue({
  logout: logoutMock,
})

describe('DashboardHeader Component', () => {
  it('renders without errors', () => {
    const { getByText } = render(
      <DashboardHeader
        avatar={avatar}
        dashboardHeading="My Dashboard"
        isButton={true}
      />
    )
    expect(getByText('My Dashboard')).toBeInTheDocument()
    expect(getByText('BUY')).toBeInTheDocument()
    expect(getByText('SELL')).toBeInTheDocument()
  })

  it('does not render buttons when `isButton` is false', () => {
    const { queryByText } = render(
      <DashboardHeader
        avatar={avatar}
        dashboardHeading="My Dashboard"
        isButton={false}
      />
    )

    expect(queryByText('BUY')).toBeNull()
    expect(queryByText('SELL')).toBeNull()
  })

  it('calls the `onBuy` and `onSell` functions when buttons are clicked', () => {
    const buyHandler = jest.fn()
    const sellHandler = jest.fn()

    const { getByText } = render(
      <DashboardHeader
        avatar={avatar}
        dashboardHeading="My Dashboard"
        isButton={true}
        onBuy={buyHandler}
        onSell={sellHandler}
      />
    )

    fireEvent.click(getByText('BUY'))
    fireEvent.click(getByText('SELL'))

    expect(buyHandler).toHaveBeenCalledTimes(1)
    expect(sellHandler).toHaveBeenCalledTimes(1)
  })

  it('renders the avatar and dropdown icon', () => {
    const { getByAltText } = render(
      <DashboardHeader
        dashboardHeading="My Dashboard"
        isButton={false}
        avatar="avatar-url"
      />
    )

    expect(getByAltText('avatar')).toBeInTheDocument()
    expect(getByAltText('Dropdown Icon')).toBeInTheDocument()
    fireEvent.click(getByAltText('Dropdown Icon'))
  })
})
