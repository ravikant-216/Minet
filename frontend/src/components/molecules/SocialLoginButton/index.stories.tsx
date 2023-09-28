import { Meta, StoryObj } from '@storybook/react'
import SocialLoginButton from '.'
import GoogleIcon from '@Assets/icons/google.svg'
import FacebookIcon from '@Assets/icons/facebook.svg'
import MicrosoftIcon from '@Assets/icons/microsoft.svg'

const meta: Meta<typeof SocialLoginButton> = {
  component: SocialLoginButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

type Story = StoryObj<typeof SocialLoginButton>

export const Google: Story = {
  args: {
    src: GoogleIcon,
    name: 'Google',
  },
}
export const Facebook: Story = {
  args: {
    src: FacebookIcon,
    name: 'Facebook',
  },
}
export const Microsoft: Story = {
  args: {
    src: MicrosoftIcon,
    name: 'Microsoft',
  },
}

export default meta
