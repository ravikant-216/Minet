import { Meta, StoryObj } from '@storybook/react'
import Image from '.'
import CheckedIcon from '@Assets/icons/StarCheckBoxCheckedIcon.svg'

const meta: Meta<typeof Image> = {
  component: Image,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Image>

export const Example: Story = {
  args: {
    src: CheckedIcon,
    alt: 'checked icon',
  },
}

export default meta
