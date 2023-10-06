import { Meta, StoryFn } from '@storybook/react'
import Signup from '.'

const meta: Meta<typeof Signup> = {
  component: Signup,
  tags: ['autodocs'],
  argTypes: {
    onIconClick: {
      action: 'GoogelLogin',
    },
    onSignUp: {
      action: 'Signup',
    },
  },
}

export default meta

const Template: StoryFn<typeof Signup> = (args) => <Signup {...args} />

export const Default = Template.bind({})
Default.args = {}
