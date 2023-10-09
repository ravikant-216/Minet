import { render, screen } from '@testing-library/react'
import DashBoardWatchList from '.'
import { WatchListItems } from '@/__mocks__'

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

describe('DashBoardWatchList', () => {
  test('should render successfully', () => {
    render(<DashBoardWatchList items={WatchListItems} />)
    WatchListItems.forEach((item) => {
      screen.getByText(item.name)
      screen.getAllByText(item.value)
    })
  })
})
