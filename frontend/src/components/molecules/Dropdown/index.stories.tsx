import React from 'react'
import Dropdown, { DropdownProps } from '.'
import { Meta, Story } from '@storybook/react'
import { Typography } from '@mui/material'
import theme from '../../../theme'

export default {
  component: Dropdown,
} as Meta

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  children: [
    <Typography variant="h6" color="primary" key={1}>
      Option 1
    </Typography>,
    <Typography variant="h6" color="secondary" key={2}>
      Option 2
    </Typography>,
    <Typography variant="h6" color="error" key={3}>
      Option 3
    </Typography>,
    <Typography variant="h6" color="skyblue" key={4}>
      Option 4
    </Typography>,
  ],
  onSelect: (value: number) => console.log(value),
  padding: `0 ${theme.spacing(3)} 0 0`,
}
