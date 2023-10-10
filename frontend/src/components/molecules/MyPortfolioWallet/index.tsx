import Image from '@/components/atoms/Image'
import { Divider, Stack, StackProps, Typography } from '@mui/material'
import ChartIcon from '@Assets/icons/charts.svg'
import ListIcon from '@Assets/icons/listIcon.svg'
import theme from '@/theme'
import CryptoCard from '../CryptoCard'
import UsdCoin from '@Assets/icons/UsdCoin.svg'
import NotransactionImg from '@Assets/images/NoTransactionImg.svg'
import {
  MY_PORTFOLIO,
  MY_WALLET,
  NO_TRANSACTION_TEXT,
  RECENT_TRANSACTION,
  TOTAL_BALANCE,
  VIEW_ALL,
} from '@/strings/constant'
import { CryptoDetailType, RencentTransactionType } from '@/utils/types'
import RecentTransactionCard from '../TransactionCard'

interface MyPortfolioWalletProps extends StackProps {
  coins: CryptoDetailType[]
  usdWalletBalance: number
  totalBalance: number
  recentTransactions?: RencentTransactionType[]
}

const MyPortfolioWallet = ({
  coins,
  usdWalletBalance,
  totalBalance,
  recentTransactions,
  ...props
}: MyPortfolioWalletProps) => {
  return (
    <Stack {...props} px={6}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="body1" color={theme.palette.text.highEmphasis}>
          {MY_PORTFOLIO}
        </Typography>
        <Stack direction="row" alignItems="center">
          <Image src={ChartIcon} alt="ChartIcon" />
          <Image src={ListIcon} alt="ListIcon" />
        </Stack>
      </Stack>
      <Stack>
        {coins.map(({ id, name, symbol, price, icon, change }) => (
          <CryptoCard
            key={id}
            name={name}
            sign={symbol}
            amount={price}
            image={icon}
            rate={change}
          />
        ))}
      </Stack>
      <Stack gap={6}>
        <Divider flexItem sx={{}} />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" color={theme.palette.text.mediumEmphasis}>
            {TOTAL_BALANCE}
          </Typography>
          <Typography variant="body1" color={theme.palette.text.highEmphasis}>
            {`$${totalBalance}`}
          </Typography>
        </Stack>
        <Divider flexItem sx={{}} />
      </Stack>
      <Stack gap={6} mt={6}>
        <Typography variant="subtitle1" color={theme.palette.text.highEmphasis}>
          {MY_WALLET}
        </Typography>
        <CryptoCard
          name="USD Coin"
          image={UsdCoin}
          sign="US Dollar"
          amount={usdWalletBalance}
        />
      </Stack>
      <Stack gap={3}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="subtitle1"
            color={theme.palette.text.highEmphasis}
          >
            {RECENT_TRANSACTION}
          </Typography>
          <Typography variant="caption2" color={theme.palette.primary[500]}>
            {VIEW_ALL}
          </Typography>
        </Stack>
        {recentTransactions === undefined || recentTransactions.length === 0 ? (
          <Stack mt={14.5} alignItems="center">
            <Image
              src={NotransactionImg}
              alt="NoTransaction"
              imageProps={{
                width: theme.spacing(40.5),
                height: theme.spacing(15.25),
              }}
            />
            <Typography
              width={theme.spacing(87.5)}
              textAlign="center"
              mt={3}
              variant="caption2"
              color={theme.palette.text.mediumEmphasis}
            >
              {NO_TRANSACTION_TEXT}
            </Typography>
          </Stack>
        ) : (
          <Stack>
            {recentTransactions.map(
              ({
                id,
                transactionDate,
                cryptoName,
                cryptoAmount,
                dollarAmount,
                transactionType,
              }) => (
                <Stack key={id}>
                  <RecentTransactionCard
                    mb={6}
                    transactionDate={transactionDate}
                    cryptoName={cryptoName}
                    cryptoAmount={cryptoAmount}
                    dollarAmount={dollarAmount}
                    transactionType={transactionType}
                  />
                </Stack>
              )
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default MyPortfolioWallet
