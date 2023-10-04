import { NavigatonItems } from '@/strings/constant'
import { fireEvent, render, screen } from '@testing-library/react'
import NavigationBar from '.'

describe('NavigationBar', () => {
  test('check properly rendered or not and test onClick', () => {
    const onClick = jest.fn()
    render(
      <NavigationBar navigationItems={NavigatonItems} handleOnClick={onClick} />
    )
    const item = screen.getByAltText(NavigatonItems[0].value)
    fireEvent.click(item)
    expect(onClick).toBeCalledWith(NavigatonItems[0].value)
  })
})
