import { render, screen } from '@testing-library/react'
import CheckedIcon from '@Assets/icons/StarCheckBoxCheckedIcon.svg'
import Image from '.'

describe('Image', () => {
  test('render or not', () => {
    render(<Image src={CheckedIcon} alt="checked icon" />)
    screen.getByAltText('checked icon')
  })
})
