import { render, screen } from '@testing-library/react'
import Footer from '.'
import {
  CAREERS,
  DASHBOARD,
  LEGAL_AND_PRIVACY,
  NEED_HELP,
} from '@/strings/constant'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />)
    screen.getByText(DASHBOARD)
    screen.getByText(CAREERS)
    screen.getByText(LEGAL_AND_PRIVACY)
    screen.getByText(NEED_HELP)
  })
})
