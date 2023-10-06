import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DashboardHeader from '.'
import avatar from '@Assets/icons/avatar.svg'

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
    expect(getByText('Buy')).toBeInTheDocument()
    expect(getByText('Sell')).toBeInTheDocument()
  })

  it('does not render buttons when `isButton` is false', () => {
    const { queryByText } = render(
      <DashboardHeader
        avatar={avatar}
        dashboardHeading="My Dashboard"
        isButton={false}
      />
    )

    expect(queryByText('Buy')).toBeNull()
    expect(queryByText('Sell')).toBeNull()
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

    fireEvent.click(getByText('Buy'))
    fireEvent.click(getByText('Sell'))

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
  })
})
