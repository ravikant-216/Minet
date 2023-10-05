import { render, fireEvent } from '@testing-library/react'
import SelectDeliveryOption from '.'
import { SELECT_DELIVERY_DATA, SPEED_DELIVERY } from '@/strings/constant'

describe('SelectDeliveryOption', () => {
  it('renders with closed dropdown', () => {
    const { getByText, getByAltText } = render(
      <SelectDeliveryOption
        isOpen={false}
        coinType="Bitcoin"
        transactionFees="$5"
        onDropDownClick={() => {}}
      />
    )

    expect(getByText(SPEED_DELIVERY)).toBeInTheDocument()
    expect(getByText('Instant : 2-5 min')).toBeInTheDocument()
    expect(getByText('$5')).toBeInTheDocument()

    const dropdownIcon = getByAltText('Dropdown Icon')
    expect(dropdownIcon).toHaveStyle('transform: rotate(0deg)')
  })

  it('renders with open dropdown', () => {
    const { getByText, getByAltText } = render(
      <SelectDeliveryOption
        isOpen={true}
        coinType="Ethereum"
        transactionFees="$10"
        onDropDownClick={() => {}}
      />
    )
    expect(getByText(SPEED_DELIVERY)).toBeInTheDocument()
    expect(getByText('Instant : 2-5 min')).toBeInTheDocument()
    expect(getByText('$10')).toBeInTheDocument()
    expect(getByText('Delivery fees: 0.005ETH')).toBeInTheDocument()
    const dropdownIcon = getByAltText('Dropdown Icon')
    expect(dropdownIcon).toHaveStyle('transform: rotate(180deg)')
  })

  it('calls onDropDownClick when dropdown icon is clicked', () => {
    const mockOnClick = jest.fn()
    const { getByAltText } = render(
      <SelectDeliveryOption
        isOpen={false}
        coinType="Bitcoin"
        transactionFees="$5"
        onDropDownClick={mockOnClick}
      />
    )

    const dropdownIcon = getByAltText('Dropdown Icon')
    fireEvent.click(dropdownIcon)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
  it('toggles between coinType', () => {
    const { getByText, rerender } = render(
      <SelectDeliveryOption
        isOpen={true}
        coinType="Bitcoin"
        transactionFees="$5"
        onDropDownClick={() => {}}
      />
    )
    expect(getByText(SELECT_DELIVERY_DATA[0].infoBitcoin)).toBeInTheDocument()

    rerender(
      <SelectDeliveryOption
        isOpen={true}
        coinType="Ethereum"
        transactionFees="$10"
        onDropDownClick={() => {}}
      />
    )
    expect(getByText(SELECT_DELIVERY_DATA[0].infoEthereum)).toBeInTheDocument()
  })
})
