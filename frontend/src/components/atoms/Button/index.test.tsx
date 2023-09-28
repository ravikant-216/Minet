import { screen, render, fireEvent } from '@testing-library/react'
import ButtonComponent from '.'

describe('Testing the ButtonComponent', () => {
  test('renders button', () => {
    const fn = jest.fn()

    render(
      <ButtonComponent
        label={'Button'}
        textColor={'white'}
        onClick={fn}
      ></ButtonComponent>
    )
    const element = screen.getByTestId('button')
    expect(element).toBeInTheDocument()
    fireEvent.click(element)
    expect(fn).toBeCalledTimes(1)
  })
})
