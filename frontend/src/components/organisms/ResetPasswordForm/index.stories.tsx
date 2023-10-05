import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ResetPasswordForm, { ResetPasswordFormProps } from '.'

export default {
  component: ResetPasswordForm,
} as Meta

const Template: Story<ResetPasswordFormProps> = (args) => (
  <ResetPasswordForm {...args} />
)

export const Default = Template.bind({})
Default.args = {
  onSubmit: action('onSubmit'),
}
