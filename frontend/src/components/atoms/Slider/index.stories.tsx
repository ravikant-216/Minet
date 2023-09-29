import { Meta, StoryFn } from '@storybook/react'
import CustomSlider, { CustomSliderProps } from '@Components/atoms/Slider/index'
import theme from '@/theme/index'

export default {
  component: CustomSlider,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta

const Template: StoryFn<CustomSliderProps> = (args) => (
  <CustomSlider {...args} />
)

export const Default = Template.bind({})
Default.args = {
  min: 0,
  max: 100,
  onChange: (value: number) => console.log('Slider value: ', value),
  valueLabelDisplay: 'auto',
  orientation: 'vertical',
  sx: {
    height: '88px',
    width: '2px',
    color: theme.palette.grey[300],
    '& .MuiSlider-rail': {
      backgroundColor: `${theme.palette.grey[300]} !important`,
    },
    '& .MuiSlider-thumb': {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: theme.palette.grey[300],
      boxShadow: 'none',
    },
  },
}
