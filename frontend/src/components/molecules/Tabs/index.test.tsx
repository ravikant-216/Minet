import { render, screen } from '@testing-library/react'
import Tabs from '.'
import { TRADE_SCREEN_TABS } from '@/strings/constant'

describe('Tabs', () => {
  test('check render properly or not', () => {
    render(<Tabs tabs={TRADE_SCREEN_TABS} value={TRADE_SCREEN_TABS[0].value} />)
    screen.getByTestId(TRADE_SCREEN_TABS[0].value)
    screen.getByTestId(TRADE_SCREEN_TABS[1].value)
  })
})
