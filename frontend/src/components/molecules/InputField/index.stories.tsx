import { Meta, Story } from '@storybook/react'
import InputField, { TextFieldProps } from '.'

export default {
  component: InputField,
} as Meta

const Template: Story<TextFieldProps> = (args) => <InputField {...args} />
export const Text = Template.bind({})
Text.args = {
  placeholder: 'you@company.com',
  type: 'text',
  inputLabel: 'Email',
  size: 'small',
}

export const Password = Template.bind({})
Password.args = {
  placeholder: 'Enter Password',
  type: 'password',
  inputLabel: 'Password',
  size: 'small',
}
