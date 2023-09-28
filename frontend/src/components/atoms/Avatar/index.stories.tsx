import avatar from '../../../../public/assests/icons/avatar.svg'
import { Meta, StoryFn } from '@storybook/react'
import AvatarComponent from './index'

export default {
  component: AvatarComponent,
  tags: ['autodocs'],
} as Meta<typeof AvatarComponent>

const Template: StoryFn<typeof AvatarComponent> = (args) => (
  <AvatarComponent {...args} />
)

export const AvatarIcon = Template.bind({})
AvatarIcon.args = {
  src: avatar,
  alt: 'account icon',
}
