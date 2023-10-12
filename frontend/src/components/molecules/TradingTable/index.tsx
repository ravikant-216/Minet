import React from 'react'
import TradeCard from '@/components/molecules/TradeCard'
import { Stack, Typography, styled } from '@mui/material'
import { TableData } from '@/utils/types'
import { formatCurrency } from '@/utils/functions'
import theme from '@/theme'
import Image from '@/components/atoms/Image'
import Arrows from '@Assets/icons/arrows.svg'
import {
  ALTERNATE,
  CHANGE,
  MARKETCAP,
  NAME,
  PRICE,
  WATCH,
} from '@/strings/constant'

export interface TradeTableProps {
  data: TableData[]
  watchlist: (id: string, checked: boolean) => void
  cardClick: (id: string) => void
}

const MainStack = styled(Stack)({
  gap: theme.spacing(3),
  backgroundColor: theme.palette.primary[100],
})

const StyleStack = styled(Stack)({
  justifyContent: 'center',
  cursor: 'pointer',
  height: theme.spacing(10.5),
})

const Header = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: `${theme.spacing(0)} ${theme.spacing(6)}`,
  position: 'sticky',
  top: 0,
  backgroundColor: theme.palette.primary[100],
  zIndex: 1,
})

const headerItems = [
  { label: NAME, width: theme.spacing(75) },
  { label: PRICE, width: theme.spacing(84.25) },
  { label: CHANGE, width: theme.spacing(59.75) },
  {
    label: MARKETCAP,
    width: theme.spacing(63.25),
    component: (
      <Stack flexDirection="row" alignItems="center">
        <Typography variant="caption1">{MARKETCAP}</Typography>
        <Image
          src={Arrows}
          alt={ALTERNATE}
          imageProps={{
            width: theme.spacing(8),
            height: theme.spacing(9),
          }}
        />
      </Stack>
    ),
  },
  { label: WATCH, width: theme.spacing(15.5) },
]

const TradeTabel = ({ data, cardClick, watchlist }: TradeTableProps) => {
  return (
    <MainStack data-testid="Trade-table">
      <Header>
        {headerItems.map((item) => (
          <StyleStack key={item.label} width={item.width}>
            {item.component ? (
              item.component
            ) : (
              <Typography variant="caption1">{item.label}</Typography>
            )}
          </StyleStack>
        ))}
      </Header>
      <Stack gap={4}>
        {data.map((item: TableData) => (
          <TradeCard
            key={item.id}
            imageSrc={item.src}
            price={formatCurrency.format(item.price)}
            change={item.change}
            marketCap={formatCurrency.format(item.marketCap)}
            currencyName={item.name}
            currencyCode={item.label}
            checked={item.checked}
            onStarClick={() => watchlist(item.id as string, item.checked)}
            onCardClick={() => cardClick(item.id as string)}
          />
        ))}
      </Stack>
    </MainStack>
  )
}

export default TradeTabel
