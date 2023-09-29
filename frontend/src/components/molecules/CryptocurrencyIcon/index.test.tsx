import React from 'react'
import { render, screen } from '@testing-library/react'
import { CryptoIcon } from '.'
import theme from '@/theme'

describe('CryptoIcon', () => {
  it('renders the icon and label', () => {
    render(
      <CryptoIcon
        icon="path/to/icon"
        label1="Label 1"
        label2="Label 2"
        label1Variant="body1"
        label2Variant="body2"
        color1={theme.palette.text.mediumEmphasis}
        color2={theme.palette.text.lowEmphasis}
      />
    )
    const image = screen.getByAltText('icon')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'path/to/icon')
    const label1 = screen.getByText('Label 1')
    const label2 = screen.getByText('Label 2')
    expect(label1).toBeInTheDocument()
    expect(label2).toBeInTheDocument()
  })
})
