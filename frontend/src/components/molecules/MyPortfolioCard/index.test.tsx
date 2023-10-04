import { render, fireEvent } from '@testing-library/react'
import MyPortfolioCard from '.'

describe('MyPortfolioCard', () => {
  it('renders with default props', () => {
    const { getByText } = render(
      <MyPortfolioCard icon="icon.png" label="Label" subLabel="Sub Label" />
    )
    expect(getByText('Label')).toBeInTheDocument()
    expect(getByText('Sub Label')).toBeInTheDocument()
  })

  it('renders with selected prop', () => {
    const { getByText } = render(
      <MyPortfolioCard
        icon="icon.png"
        label="Label"
        subLabel="Sub Label"
        selected
      />
    )
    expect(getByText('Label')).toBeInTheDocument()
    expect(getByText('Sub Label')).toBeInTheDocument()
  })

  it('handles onClick prop', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <MyPortfolioCard
        icon="icon.png"
        label="Label"
        subLabel="Sub Label"
        onClick={handleClick}
      />
    )
    fireEvent.click(getByText('Label'))
    expect(handleClick).toHaveBeenCalled()
  })
})
