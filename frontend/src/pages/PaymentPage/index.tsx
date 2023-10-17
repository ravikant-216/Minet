import { useNavigate, useLocation } from 'react-router-dom'
import PaymentSuccessCard from '@/components/organisms/PaymentSuccessCard'
import TradingTemplate from '@/components/templates/TradingTemplate'
import { Box, styled } from '@mui/material'
import { TransactionData } from '@/utils/types'
import { useEffect } from 'react'
const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})
const PaymentPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const transaction: TransactionData = location.state?.transaction
  useEffect(() => {
    if (!transaction) {
      navigate('/dashboard')
    }
  }, [transaction, navigate])
  if (!transaction) {
    return <></>
  }
  return (
    <TradingTemplate dashboardHeading={'Checkout'} isButton={true}>
      <StyledBox>
        <PaymentSuccessCard
          coinAmount={transaction.quantity}
          coinCode={transaction.crypto.symbol}
          isSell={transaction.type === 'Sold'}
          onClick={() => {
            navigate('/cash-wallet')
          }}
        />
      </StyledBox>
    </TradingTemplate>
  )
}

export default PaymentPage
