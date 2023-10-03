import { render } from '@testing-library/react'
import TimeTabs from '.'

describe('TimeTabs', () => {
  it('should render tabs correctly', () => {
    const { getAllByTestId } = render(
      <TimeTabs borderRadius={false} width="100%" />
    )
    const tabs = getAllByTestId('time-period-tabs')

    expect(tabs.length).toBe(1)
    expect(tabs[0]).toHaveTextContent('1H')
    expect(tabs[0]).toHaveTextContent('24H')
    expect(tabs[0]).toHaveTextContent('1W')
    expect(tabs[0]).toHaveTextContent('1M')
    expect(tabs[0]).toHaveTextContent('1Y')
    expect(tabs[0]).toHaveTextContent('ALL')
  })

  it('should render active tab with circle border when borderRadius is true', () => {
    const { getByTestId } = render(
      <TimeTabs borderRadius={true} width="100%" />
    )
    const tabs = getByTestId('active-tab')

    expect(tabs).toHaveStyle('borderRadius: 50px')
  })

  it('should render active tab with underline when borderRadius is false', () => {
    const { getAllByTestId } = render(
      <TimeTabs borderRadius={false} width="100%" />
    )
    const tabs = getAllByTestId('time-period-tabs')

    expect(tabs.length).toBe(1)

    const activeTab = tabs[0].querySelector('.MuiTypography-root')
    expect(activeTab).toHaveStyle('borderBottom: 1px solid primary.main')
  })
})
