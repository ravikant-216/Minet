import theme from '@/theme'
import ResetPasswordStatusBar from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  component: ResetPasswordStatusBar,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof ResetPasswordStatusBar> = (args) => (
  <ResetPasswordStatusBar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  width: theme.spacing(128),
}
