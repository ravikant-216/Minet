import { Meta, StoryFn } from '@storybook/react'
import MyPortfolio, { PortfolioValueProps } from '.'
import { MOCK_DATA_ONE, MOCK_DATA_TWO } from '@/strings/constant'

export default {
  component: MyPortfolio,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<PortfolioValueProps> = (args) => (
  <MyPortfolio {...args} />
)

export const PortfolioWithData = Template.bind({})
PortfolioWithData.args = { ...MOCK_DATA_ONE }

export const PortfolioWithoutData = Template.bind({})
PortfolioWithoutData.args = { ...MOCK_DATA_TWO }
