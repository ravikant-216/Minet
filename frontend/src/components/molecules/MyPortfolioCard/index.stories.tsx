import { Meta, Story } from '@storybook/react'
import MyPortfolioCard, { MyPortfolioCardProps } from '.'
import ethereum from '../../../../public/assests/icons/ethereum.svg'

export default {
  component: MyPortfolioCard,
} as Meta

const Template: Story<MyPortfolioCardProps> = (args) => (
  <MyPortfolioCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: ethereum,
  label: 'Ethereum',
  subLabel: '$1,297.93',
  sx: {
    height: '156px',
    width: '159px',
  },
}
export const Selected = Template.bind({})
Selected.args = {
  icon: ethereum,
  label: 'Ethereum',
  selected: true,
  subLabel: '$1,297.93',
  sx: {
    height: '156px',
    width: '159px',
  },
}
