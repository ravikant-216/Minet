import { getAllTransactionsByCryptoId } from '@/api/api'
import CurrencyDetailOverview from '@/components/molecules/CurrencyDetailOverview'
import Tabs from '@/components/molecules/Tabs'
import CurrencyDetailWallet from '@/components/organisms/CurrencyDetailWallet'
import { formatter } from '@/strings/constant'
import theme from '@/theme'
import { formatTransactions } from '@/utils/functions'
import { CryptoData, Transaction, TransactionData } from '@/utils/types'
import { props } from '@Components/molecules/CurrencyDetailOverview/constant'
import WatchListCard from '@Components/molecules/WatchListCard'
import TradingTemplate from '@Components/templates/TradingTemplate'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// Will Impliment the cryptoId ,userId  Later using useLocation during the routing of pages

const StyledBox = styled(Box)({
  padding: theme.spacing(6),
  borderLeft: `1px solid ${theme.palette.gamma.GREY_100}`,
  background: theme.palette.gamma.GREY_WHITE,
  height: '100%',
})

const Component = ({
  cryptoId,
  userId,
}: {
  cryptoId: string
  userId: string
}) => {
  // const location = useLocation()
  // const cryptoId = location.state.state.cryptoId
  const [value, setValue] = useState('All Assets')
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [crypto, setCrypto] = useState<CryptoData>()
  const [cryptoQuantitySum, setCryptoQuantitySum] = useState(0)
  const [transactionPriceSum, setTransactionPriceSum] = useState(0)
  const fetchData = async (cryptoId: string) => {
    try {
      const transactionsRes = await getAllTransactionsByCryptoId(cryptoId)

      const transactionsData: TransactionData[] = transactionsRes.data.filter(
        (transaction: TransactionData) =>
          transaction.user && transaction.user.id === userId
      )
      if (transactionsData.length > 0) setCrypto(transactionsData[0].crypto)
      const {
        formattedTransactions,
        tempCryptoQuantitySum,
        tempTransactionPriceSum,
      } = formatTransactions(transactionsData)
      setTransactions(formattedTransactions)
      setCryptoQuantitySum(tempCryptoQuantitySum)
      setTransactionPriceSum(tempTransactionPriceSum)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData(cryptoId)
  }, [cryptoId])

  return (
    <StyledBox>
      {crypto && (
        <WatchListCard
          image={crypto.icon}
          name={crypto.name}
          sign={crypto.symbol}
          marketCap={crypto.marketCap}
          trendValue={crypto.change}
          volIn24H={crypto.volume}
          circulatingSupply={crypto.circulatingSupply}
        />
      )}
      <Tabs
        tabs={[
          {
            label: 'All Assets',
            value: 'All Assets',
          },
          {
            label: 'Watchlist',
            value: 'Watchlist',
          },
        ]}
        onChange={(e, value) => setValue(value)}
        value={value}
      />
      {value === 'All Assets' && crypto ? (
        <Box pt={theme.spacing(6)} pb={theme.spacing(6)}>
          <CurrencyDetailOverview
            correlationCardData={props.correlationCardData}
            currentValue={formatter.format(crypto.price)}
            description={props.description}
            name={crypto.name}
            plotData={{
              data: props.plotData.data,
              name: crypto.name,
            }}
            trendValue={crypto.change}
            yaxisPlotsData={props.yaxisPlotsData}
          />
        </Box>
      ) : (
        <Box pt={theme.spacing(6)} pb={theme.spacing(6)}>
          <CurrencyDetailWallet
            textAlign="left"
            totalBalance={`${cryptoQuantitySum} ${
              crypto?.symbol
            } (${formatter.format(transactionPriceSum)})`}
            transactions={transactions}
          />
        </Box>
      )}
    </StyledBox>
  )
}

const DetailPage = ({
  cryptoId,
  userId,
}: {
  cryptoId: string
  userId: string
}) => {
  return (
    <TradingTemplate dashboardHeading={'Trade'} isButton={true}>
      <Component cryptoId={cryptoId} userId={userId} />
    </TradingTemplate>
  )
}

export default DetailPage
