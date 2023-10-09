import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Dropdown from '.'

describe('Dropdown', () => {
  const mockOnSelect = jest.fn()
  const options = ['Option 1', 'Option 2', 'Option 3']

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<Dropdown onSelect={mockOnSelect}>{options}</Dropdown>)
    screen.getByText('Option 1')
  })

  it('displays the correct number of options', () => {
    const { getAllByRole, getByText } = render(
      <Dropdown onSelect={mockOnSelect}>{options}</Dropdown>
    )
    fireEvent.mouseDown(getByText('Option 1'))
    expect(getAllByRole('option')).toHaveLength(options.length)
    fireEvent.click(getByText('Option 2'))
    expect(mockOnSelect).toHaveBeenCalledWith(1)
  })
  it('does not crash when onSelect is not provided', () => {
    const { getByText } = render(<Dropdown>{options}</Dropdown>)
    fireEvent.mouseDown(getByText('Option 1'))
    fireEvent.click(getByText('Option 2'))
  })
})
