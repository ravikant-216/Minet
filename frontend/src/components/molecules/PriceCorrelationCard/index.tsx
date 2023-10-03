import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography, styled, useTheme } from '@mui/material'
// eslint-disable-next-line import/namespace
import CryptoCard from '../CryptoCard'

interface ObjectInterface {
  id: number
  cryptoImage: string
  cryptoName: string
  value: string
  amount: number
  value1: number
}
export interface CorrelationCardProps {
  CardName: string
  CardData: ObjectInterface[]
}

const ParentGrid = styled(Grid)(({ theme }) => ({
  width: theme.spacing(99.25),
  height: theme.spacing(78),
  padding: `${theme.spacing(4)} ${theme.spacing(0)} 
  ${theme.spacing(4)} ${theme.spacing(4)}`,
  borderRadius: theme.spacing(1),
  border: `${theme.spacing(0.25)} solid ${theme.palette.gamma.GREY_100}`,
  backgroundColor: theme.palette.gamma.GREY_WHITE,
}))

const RootGrid = styled(Grid)(({ theme }) => ({
  overflowY: 'scroll',
  maxHeight: theme.spacing(57.5),
  marginTop: theme.spacing(4),
  '&::-webkit-scrollbar': {
    width: theme.spacing(1.5),
    paddingBottom: theme.spacing(1),
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.primary.contrastText,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.grey[300],
    borderRadius: theme.spacing(2.5),
  },
}))

const CorrelationCard = ({ CardName, CardData }: CorrelationCardProps) => {
  const theme = useTheme()
  return (
    <ParentGrid data-testid="correlation">
      <Typography variant="subtitle1">{CardName}</Typography>
      <RootGrid>
        {CardData.map((obj) => (
          <CryptoCard
            key={obj.id}
            varient="secondary"
            name={obj.cryptoName}
            image={obj.cryptoImage}
            sign={obj.value}
            amount={obj.amount}
            rate={obj.value1}
            width={theme.spacing(90)}
          />
        ))}
      </RootGrid>
    </ParentGrid>
  )
}

export default CorrelationCard
