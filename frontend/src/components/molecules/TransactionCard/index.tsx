import {
  Box,
  Stack,
  StackProps,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import Image from '@Components/atoms/Image'
import TickMarkIcon from '@Assets/icons/Tick.svg'
import TypographyLabel from '@/components/atoms/TypographyLabel'
import ChipComponent from '@/components/atoms/Chip/index'
import { ALTERNATE_MESSAGE } from '@/strings/constant'

interface RecentTransactionPropsTypes extends StackProps {
  transactionDate: Date
  cryptoName: string
  transactionType: string
  cryptoAmount: string
  dollarAmount: string
}

const Layout = styled(Stack)(({ theme }) => ({
  height: theme.spacing(17.5),
}))

const InnerLayout = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const ImageContainer = styled(Box)(({ theme }) => ({
  height: theme.spacing(11.5),
  width: theme.spacing(11),
}))

const DataContainer = styled(Box)(({ theme }) => ({
  height: theme.spacing(11.5),
  width: theme.spacing(73.5),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}))

const RecentTransactionCard = ({
  transactionDate,
  transactionType,
  cryptoName,
  cryptoAmount,
  dollarAmount,
  ...props
}: RecentTransactionPropsTypes) => {
  const theme = useTheme()

  const formattedDate = transactionDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
  return (
    <Layout data-testid="transaction-card" {...props}>
      <Typography variant="caption2">{formattedDate}</Typography>
      <InnerLayout>
        <ImageContainer>
          <Image src={TickMarkIcon} alt={ALTERNATE_MESSAGE} />
        </ImageContainer>
        <DataContainer>
          <Box>
            <Typography variant="body1">{cryptoName}</Typography>
            <ChipComponent
              label={transactionType}
              textVariant="caption2"
              textColor={theme.palette.gamma.GREY_500}
              background={theme.palette.gamma.GREY_100}
              height={theme.spacing(5)}
            />
          </Box>
          <TypographyLabel
            position="right"
            color1={theme.palette.text.highEmphasis}
            color2={theme.palette.text.mediumEmphasis}
            label1Variant="body1"
            label2Variant="caption2"
            label1={cryptoAmount}
            label2={dollarAmount}
          />
        </DataContainer>
      </InnerLayout>
    </Layout>
  )
}

export default RecentTransactionCard
