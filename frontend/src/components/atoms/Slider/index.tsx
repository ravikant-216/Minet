import React from 'react'
import { Slider, SliderProps, styled } from '@mui/material'
import theme from '@/theme'

const StyleSlider = styled(Slider)({
  color: theme.palette.grey[300],
  '& .MuiSlider-rail': {
    backgroundColor: `${theme.palette.grey[300]} !important`,
  },
  '& .MuiSlider-thumb': {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    borderRadius: '50%',
    backgroundColor: theme.palette.grey[300],
    boxShadow: 'none',
  },
})
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

  return <StyleSlider {...sliderprops} onChange={handleChange} />
}

export default CustomSlider
