import Image from '@/components/atoms/Image'
import FilterIcon from '@Assets/icons/filterIcon.svg'
import theme from '@/theme'
import SearchIcon from '@Assets/icons/search.svg'
import {
  Box,
  Divider,
  InputAdornment,
  Stack,
  StackProps,
  TextField,
  Typography,
} from '@mui/material'

import Dropdown from '@/components/molecules/Dropdown'
import CurrencyDetailWalletCard from '@/components/molecules/CurrencyDetailWalletCard'
import { Transacton } from '@/utils/types'
import { useState } from 'react'
import { ONE_M, TOTAL_BALANCE } from '@/strings/constant'

interface CurrencyDetailWalletProps extends StackProps {
  transactions: Transacton[]
  textAlign: 'right' | 'left'
  totalBalance: string
}

const CurrencyDetailWallet = ({
  transactions: initialTransaction,
  textAlign,
  totalBalance,
  ...props
}: CurrencyDetailWalletProps) => {
  const [transactions, setTransactions] =
    useState<Transacton[]>(initialTransaction)

  const [search, setSearch] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    if (e.target.value === '') return setTransactions(initialTransaction)
    setTransactions(
      initialTransaction.filter(
        (transaction) =>
          transaction.user.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          transaction.cryptoType.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
      )
    )
  }

  return (
    <Stack gap={3} {...props}>
      <Box
        display="flex"
        px={4}
        py={6}
        sx={{ background: theme.palette.gamma.GREY_50 }}
        borderRadius={1}
        alignItems="center"
        gap={2.5}
        data-testid="total-balance"
        justifyContent={textAlign === 'right' ? 'space-between' : ''}
      >
        <Typography variant="subtitle1" display="inline">
          {TOTAL_BALANCE}
        </Typography>
        <Typography variant="subtitle1" display="inline">
          {totalBalance}
        </Typography>
      </Box>
      <Stack justifyContent="flex-end" direction="row" gap={3}>
        <TextField
          placeholder="Search all assets"
          variant="outlined"
          value={search}
          onChange={handleSearch}
          data-testid="search-input"
          InputProps={{
            sx: {
              height: theme.spacing(10),
              ...theme.typography.body2,
              color: theme.palette.text.mediumEmphasis,
              borderRadius: 1,
              border: `1px solid ${theme.palette.gamma.GREY_WHITE}`,
            },
            endAdornment: (
              <InputAdornment position="end">
                <Stack direction="row" gap={2}>
                  <Image src={SearchIcon} alt="Search" />
                  <Divider orientation="vertical" flexItem variant="middle" />
                  <Image src={FilterIcon} alt="Search" />
                </Stack>
              </InputAdornment>
            ),
          }}
        />
        <Dropdown
          size="small"
          padding={theme.spacing(0)}
          sx={{ height: '40px', width: theme.spacing(20) }}
        >
          {[
            <Typography
              key={1}
              variant="body2"
              color={theme.palette.text.highEmphasis}
            >
              {ONE_M}
            </Typography>,
          ]}
        </Dropdown>
      </Stack>
      <Box
        p={6}
        border={`1px solid ${theme.palette.gamma.GREY_100}`}
        borderRadius={1}
        overflow="auto"
      >
        <Stack gap={4}>
          {transactions.map((transaction, index) => {
            const { id, transactionType, date, status, amount, cryptoType } =
              transaction
            const dateObj = new Date(date)
            const formatter = new Intl.DateTimeFormat('fr', { month: 'short' })
            const month = formatter.format(dateObj)
            return (
              <Stack key={id} gap={4} data-testid="currency-detail-wallet-card">
                <CurrencyDetailWalletCard
                  key={id}
                  transactionType={
                    transactionType === 'buy' ? 'Purchased' : 'Sold'
                  }
                  day={+dateObj.getDay()}
                  mounth={month}
                  type={status}
                  cyprtoAmount={`$${transaction.amount}`}
                  price={`+${amount} ${cryptoType.sign}`}
                  label1={cryptoType.name}
                  label2={`from ${transaction.user.name}`}
                />
                {index !== transactions.length - 1 && <Divider />}
              </Stack>
            )
          })}
        </Stack>
      </Box>
    </Stack>
  )
}
export default CurrencyDetailWallet
