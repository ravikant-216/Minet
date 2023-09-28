import { Meta, StoryFn } from '@storybook/react'
import ButtonComponent from '.'
import theme from '../../../theme/index'

export default {
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outlined', 'text', 'contained'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof ButtonComponent>

const Template: StoryFn<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
)

export const SignIn = Template.bind({})
SignIn.args = {
  variant: 'contained',
  label: 'Sign In',
  textColor: theme.palette.gamma.GREY_WHITE,
  hoverColor: theme.palette.primary.main,
  sx: {
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(103),
    height: theme.spacing(13),
  },
  onClick: () => window.alert('Welcome!!'),
}

export const LogInLink = Template.bind({})
LogInLink.args = {
  variant: 'text',
  label: 'Login',
  textColor: theme.palette.primary.main,
  onClick: () => window.alert('Welcome!!'),
  sx: {
    backgroundColor: theme.palette.gamma.GREY_WHITE,
    fontWeight: 600,
    textTransform: 'none',
  },
}

export const Sell = Template.bind({})
Sell.args = {
  variant: 'contained',
  label: 'Sell',
  textColor: theme.palette.gamma.GREY_WHITE,
  hoverColor: theme.palette.gamma.WARNING_300,
  onClick: () => window.alert('Welcome!!'),
  sx: {
    backgroundColor: theme.palette.gamma.WARNING_300,
    width: theme.spacing(40),
    height: theme.spacing(14),
  },
}
