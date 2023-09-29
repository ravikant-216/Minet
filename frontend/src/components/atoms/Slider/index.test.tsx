import { fireEvent, render } from '@testing-library/react'
import CustomSlider from '@Components/atoms/Slider/index'

describe('CustomSlider', () => {
  it('should call onChange callback when slider value changes', () => {
    const onChangeMock = jest.fn()
    const { getByRole } = render(<CustomSlider onChange={onChangeMock} />)
    const slider = getByRole('slider')

    fireEvent.change(slider, { target: { value: '50' } })

    expect(onChangeMock).toHaveBeenCalledWith(50)
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should pass other props to Slider component', () => {
    const { getByRole } = render(<CustomSlider min={0} max={100} />)
    const slider = getByRole('slider')

    expect(slider).toHaveAttribute('min', '0')
    expect(slider).toHaveAttribute('max', '100')
  })

  it('should pass default props to Slider component', () => {
    const { getByRole } = render(
      <CustomSlider min={0} max={100} onChange={undefined} />
    )
    const slider = getByRole('slider')

    fireEvent.change(slider, { target: { value: 50 } })

    expect(slider).toHaveAttribute('min', '0')
    expect(slider).toHaveAttribute('max', '100')
  })
})
