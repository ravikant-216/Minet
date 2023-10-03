import theme from '@/theme'
import TimeTabs from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  component: TimeTabs,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<typeof TimeTabs> = (args) => <TimeTabs {...args} />

export const Default = Template.bind({})
Default.args = {
  borderRadius: false,
  width: theme.spacing(76),
}
