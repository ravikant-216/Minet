/* eslint-disable prettier/prettier */
import { getAllTransactionsByCryptoId, getCryptoById } from '@/api/api'
import CurrencyDetailOverview from '@/components/molecules/CurrencyDetailOverview'
import Tabs from '@/components/molecules/Tabs'
import CurrencyDetailWallet from '@/components/organisms/CurrencyDetailWallet'
import DashBoardTemplate from '@/components/templates/DashBoardTemplate'
import { formatter } from '@/strings/constant'
import theme from '@/theme'
import { formatTransactions } from '@/utils/functions'
import { CryptoData, Transaction, TransactionData } from '@/utils/types'
import { props } from '@Components/molecules/CurrencyDetailOverview/constant'
import WatchListCard from '@Components/molecules/WatchListCard'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
  const [value, setValue] = useState('Overview')
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [crypto, setCrypto] = useState<CryptoData>()
  const [cryptoQuantitySum, setCryptoQuantitySum] = useState(0)
  const [transactionPriceSum, setTransactionPriceSum] = useState(0)
  const fetchData = async (cryptoId: string) => {
    try {
      const cryptoRes = await getCryptoById(cryptoId)
      const transactionsRes = await getAllTransactionsByCryptoId(cryptoId)

      const transactionsData: TransactionData[] = transactionsRes.data.filter(
        (transaction: TransactionData) =>
          transaction.user &&
          transaction.user.id === userId &&
          transaction.crypto.id === cryptoId
      )
      const cryptoData: CryptoData = cryptoRes.data
      setCrypto(cryptoData)
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
            label: 'Overview',
            value: 'Overview',
          },
          {
            label: 'Wallet',
            value: 'Wallet',
          },
        ]}
        onChange={(e, value) => setValue(value)}
        value={value}
      />
      {value === 'Overview' && crypto ? (
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

const DetailPage = ({ userId }: { userId: string }) => {
  const { cryptoId } = useParams<{ cryptoId: string }>()
  const navigate = useNavigate()
  useEffect(() => {
    if (!cryptoId) {
      navigate('/dashboard')
    }
  }, [cryptoId])
  return (
    <DashBoardTemplate title={'Trade'} isButton={true}>
      <Component cryptoId={cryptoId as string} userId={userId} />
    </DashBoardTemplate>
  )
}

export default DetailPage
