import { fireEvent, render, screen } from '@testing-library/react'
import DashBoardTemplate from '.'
import { NavigatonItems } from '@/strings/constant'

describe('DashBoardTemplate', () => {
  test('renders DashBoardTemplate component', () => {
    render(
      <DashBoardTemplate title="home">
        <div>Hi</div>
      </DashBoardTemplate>
    )
    screen.getByText('Hi')
    screen.getByText('home')
    fireEvent.click(screen.getByAltText(NavigatonItems[0].value))
  })
})
