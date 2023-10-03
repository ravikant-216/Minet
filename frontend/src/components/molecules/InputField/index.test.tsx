import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputField from '.'

describe('InputField', () => {
  it('renders without crashing', () => {
    const { getByPlaceholderText, getByText } = render(
      <InputField placeholder="Test" inputLabel={'Password'} />
    )
    expect(getByPlaceholderText('Test')).toBeInTheDocument()
    expect(getByText('Password')).toBeInTheDocument()
  })

  it('handles password visibility toggle', () => {
    const { getByLabelText, rerender, getByDisplayValue, getByText } = render(
      <InputField type="password" value="password" />
    )
    expect(getByText('Input Label')).toBeInTheDocument()
    const toggleButton = getByLabelText('toggle password visibility')
    fireEvent.click(toggleButton)
    rerender(<InputField type="text" value="password" inputLabel={''} />)

    expect(getByDisplayValue('password')).toBeInTheDocument()
  })
})
