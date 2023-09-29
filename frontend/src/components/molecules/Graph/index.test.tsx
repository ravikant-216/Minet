import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Graph from '.'
import theme from '@/theme'

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

describe('Testing Graph', () => {
  it('renders the Graph', () => {
    render(
      <Graph
        series={[
          {
            name: 'Bitcoin',
            data: [50, 100, 95, 125, 120, 125],
          },
        ]}
        showLabel={false}
        showGrid={false}
        strokeColors={[theme.palette.gamma.SUCCESS_500]}
        fillColors={[theme.palette.gamma.SUCCESS_100]}
        opacity={0.5}
      />
    )
    const GraphComponent = screen.getByTestId('area-graph')
    expect(GraphComponent).toBeInTheDocument()
  })
})
