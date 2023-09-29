import { render } from '@testing-library/react'
import TypographyLabel from '.'

describe('TypographyLabel', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <TypographyLabel
        label1="Test Label 1"
        label2="Test Label 2"
        color1="primary"
        color2="secondary"
        label1Variant="body1"
        label2Variant="body2"
      />
    )

    expect(getByText('Test Label 1')).toBeInTheDocument()
    expect(getByText('Test Label 2')).toBeInTheDocument()
  })

  it('renders correctly with position prop', () => {
    const { getByText } = render(
      <TypographyLabel
        label1="Test Label 1"
        label2="Test Label 2"
        color1="primary"
        color2="secondary"
        label1Variant="body1"
        label2Variant="body2"
        position="right"
      />
    )

    expect(getByText('Test Label 1')).toBeInTheDocument()
    expect(getByText('Test Label 2')).toBeInTheDocument()
  })

  it('aligns items based on trendDirection prop', () => {
    const { container } = render(
      <TypographyLabel
        label1="Test Label 1"
        label2="Test Label 2"
        color1="primary"
        color2="secondary"
        label1Variant="body1"
        label2Variant="body2"
        trendValue={10}
        trendDirection="column"
      />
    )
    expect(container.firstChild).toHaveStyle(`flex-direction: column`)
  })
})
