import { Slider, SliderProps } from '@mui/material'
import styled from 'styled-components'
import theme from '@/theme'

const StyleSlider = styled(Slider)({
  color: theme.palette.text.lowEmphasis,
  '& .MuiSlider-rail': {
    backgroundColor: `${theme.palette.text.lowEmphasis} !important`,
    borderRadius: '2px',
  },
  '& .MuiSlider-thumb': {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    backgroundColor: theme.palette.text.lowEmphasis,
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
