import Image from '@/components/atoms/Image'
import theme from '@/theme'
import truck from '@Assets/icons/truck.svg'
import ExpandMoreIcon from '@Assets/icons/chevron-down.svg'
import { Stack, Typography, styled } from '@mui/material'
import {
  INSTANT_TIME,
  SELECT_DELIVERY_DATA,
  SPEED_DELIVERY,
} from '@/strings/constant'

interface SelectDeliveryProps {
  isOpen: boolean
  coinType: string
  transactionFees: string
  onDropDownClick: () => void
}

const Container = styled(Stack)({
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
  backgroundColor: theme.palette.gamma.GREY_WHITE,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(6),
  gap: theme.spacing(3),
})

const StyleStack = styled(Stack)({
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
  padding: theme.spacing(4),
})
const StyleTypography = styled(Typography)({
  color: theme.palette.text.highEmphasis,
})
const Wrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  cursor: 'pointer',
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
  backgroundColor: theme.palette.gamma.GREY_50,
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
})
const SelectDeliveryOption = ({
  isOpen,
  coinType,
  transactionFees,
  onDropDownClick,
}: SelectDeliveryProps) => {
  return (
    <Container>
      <Typography color={theme.palette.text.highEmphasis} variant="body1">
        {SPEED_DELIVERY}
      </Typography>
      <Stack>
        <StyleStack direction={'row'} justifyContent={'space-between'}>
          <Stack alignItems={'center'} gap={theme.spacing(3)} direction={'row'}>
            <Image
              src={truck}
              alt="truck"
              imageProps={{ width: theme.spacing(8), height: theme.spacing(8) }}
            />
            <Stack>
              <StyleTypography variant="body1">{INSTANT_TIME}</StyleTypography>
              <Typography
                color={theme.palette.text.mediumEmphasis}
                variant="caption1"
              >
                {transactionFees}
              </Typography>
            </Stack>
          </Stack>
          <Image
            src={ExpandMoreIcon}
            alt="Dropdown Icon"
            onClick={onDropDownClick}
            imageProps={{
              style: {
                transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
                transition: 'transform 0.3s ease-in-out',
              },
              width: theme.spacing(8),
              height: theme.spacing(8),
            }}
          />
        </StyleStack>
        {isOpen && (
          <Stack>
            {SELECT_DELIVERY_DATA.map((data) => {
              return (
                <Wrapper key={data.id}>
                  <Stack direction={'row'}>
                    <StyleTypography variant="body2">
                      {data.label1 === 'None'
                        ? data.label1
                        : data.label1 + ' :  '}
                    </StyleTypography>
                    {data.label2 && (
                      <StyleTypography variant="body1">
                        {data.label2}
                      </StyleTypography>
                    )}
                  </Stack>
                  <Stack>
                    <Typography
                      color={theme.palette.text.mediumEmphasis}
                      variant="caption2"
                    >
                      {coinType === 'Bitcoin'
                        ? data.infoBitcoin
                        : data.infoEthereum}
                    </Typography>
                  </Stack>
                </Wrapper>
              )
            })}
          </Stack>
        )}
      </Stack>
    </Container>
  )
}

export default SelectDeliveryOption
