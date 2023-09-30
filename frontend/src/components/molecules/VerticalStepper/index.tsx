import { Box, styled } from '@mui/material'
import stepper from '@Assets/icons/stepper.svg'
import truck from '@Assets/icons/delivery.svg'
import StepperElement from './stepperElement'
import { DELIVERY_FEE, DEPOSIT_TO } from '@/strings/constant'
import Image from '@Components/atoms/Image/index'
import theme from '@/theme'

interface VerticalStepperProps {
  paymentIcon: string
  depositIcon: string
  paymentValue: string
  depositValue: string
  deleveryFee: string
  paymentText: string
}

const RootBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

const StepperBox = styled(Box)({
  marginLeft: theme.spacing(4),
})

const VerticalStepper = ({
  paymentIcon,
  paymentValue,
  depositIcon,
  depositValue,
  deleveryFee,
  paymentText,
}: VerticalStepperProps) => {
  return (
    <RootBox data-testid="transaction-stepper">
      <StepperElement
        icon={paymentIcon}
        value={paymentValue}
        text={paymentText}
      />
      <StepperBox>
        <Image src={stepper} alt="stepper" />
      </StepperBox>
      <StepperElement icon={truck} value={deleveryFee} text={DELIVERY_FEE} />
      <StepperBox>
        <Image src={stepper} alt="stepper" />
      </StepperBox>
      <StepperElement
        icon={depositIcon}
        value={depositValue}
        text={DEPOSIT_TO}
      />
    </RootBox>
  )
}

export default VerticalStepper
