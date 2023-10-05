import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ForgotPasswordForm, { ForgotPasswordFormProps } from '.'

export default {
  title: 'Components/ForgotPasswordForm',
  component: ForgotPasswordForm,
} as Meta

const Template: Story<ForgotPasswordFormProps> = (args) => (
  <ForgotPasswordForm {...args} />
)

export const Default = Template.bind({})
Default.args = {
  loginOnClick: action('loginOnClick'),
  onSubmit: action('onSubmit'),
}
