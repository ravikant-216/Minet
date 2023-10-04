import { render, screen } from '@testing-library/react'
import CurrencyDetailWalletCard from '.'

describe('CurrencyDetailWalletCard', () => {
  it('renders with pending type', () => {
    render(
      <CurrencyDetailWalletCard
        type="pending"
        label1="Label 1"
        label2="Label 2"
        mounth="January"
        day={1}
        transactionType="Sold"
        price="$1000"
        cyprtoAmount="0.01 BTC"
      />
    )
    expect(screen.getByText('Label 1')).toBeInTheDocument()
    expect(screen.getByText('Label 2')).toBeInTheDocument()
    expect(screen.getByText('January')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Sold')).toBeInTheDocument()
    expect(screen.getByText('$1000')).toBeInTheDocument()
    expect(screen.getByText('0.01 BTC')).toBeInTheDocument()
  })

  it('renders with success type', () => {
    render(
      <CurrencyDetailWalletCard
        type="success"
        label1="Label 1"
        label2="Label 2"
        mounth="February"
        day={2}
        transactionType="Purchased"
        price="$2000"
        cyprtoAmount="0.02 BTC"
      />
    )
    expect(screen.getByText('Label 1')).toBeInTheDocument()
    expect(screen.getByText('Label 2')).toBeInTheDocument()
    expect(screen.getByText('February')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Purchased')).toBeInTheDocument()
    expect(screen.getByText('$2000')).toBeInTheDocument()
    expect(screen.getByText('0.02 BTC')).toBeInTheDocument()
  })

  it('renders with cancel type', () => {
    render(
      <CurrencyDetailWalletCard
        type="cancel"
        label1="Label 1"
        label2="Label 2"
        mounth="March"
        day={3}
        transactionType="Sold"
        price="$3000"
        cyprtoAmount="0.03 BTC"
      />
    )
    expect(screen.getByText('Label 1')).toBeInTheDocument()
    expect(screen.getByText('Label 2')).toBeInTheDocument()
    expect(screen.getByText('March')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Sold')).toBeInTheDocument()
    expect(screen.getByText('$3000')).toBeInTheDocument()
    expect(screen.getByText('0.03 BTC')).toBeInTheDocument()
  })
})
