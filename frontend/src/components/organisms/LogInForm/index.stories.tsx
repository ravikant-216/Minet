import { Meta, StoryFn } from '@storybook/react'
import LogIn from '.'

export default {
  component: LogIn,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof LogIn> = (args) => <LogIn {...args} />

export const Default = Template.bind({})
Default.args = {
  onIconClick: () => console.log('icon'),
  onSignIn: () => console.log('sign in'),
}
