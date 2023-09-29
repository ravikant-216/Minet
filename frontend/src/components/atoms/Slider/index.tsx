import React from 'react'
import { Slider, SliderProps } from '@mui/material'

export interface CustomSliderProps extends Omit<SliderProps, 'onChange'> {
  onChange?: (value: number) => void
  style?: React.CSSProperties
}

const CustomSlider = ({ onChange, ...sliderprops }: CustomSliderProps) => {
  const handleChange = (event: Event, value: number | number[]) => {
    if (onChange) {
      onChange(typeof value === 'number' ? value : value[0])
    }
  }

  return <Slider {...sliderprops} onChange={handleChange} />
}

export default CustomSlider
