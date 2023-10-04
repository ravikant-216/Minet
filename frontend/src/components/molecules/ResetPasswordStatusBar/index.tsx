import Image from '@/components/atoms/Image'
import theme from '@/theme'
import { Stack, Typography } from '@mui/material'
import styled from 'styled-components'
import successTick from '@Assets/icons/tick-circle.svg'
import {
  PASSWORD_RESET_INSTRUCTION,
  PASSWORD_RESET_SUCCESS,
} from '@/strings/constant'

const Wrapper = styled(Stack)({
  borderRadius: theme.spacing(3),
  display: 'flex',
  flexDirection: 'row',
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
  backgroundColor: theme.palette.primary[100],
  gap: theme.spacing(3),
  padding: theme.spacing(6),
})

const StyleStack = styled(Stack)({
  gap: theme.spacing(0.5),
  width: theme.spacing(105),
  height: theme.spacing(11.5),
})

interface ResetPasswordStatusBarProps {
  width: string
}
const ResetPasswordStatusBar = ({ width }: ResetPasswordStatusBarProps) => {
  return (
    <Wrapper width={width}>
      <Image
        src={successTick}
        alt="password-sent"
        imageProps={{ width: theme.spacing(8), height: theme.spacing(8) }}
      />
      <StyleStack gap={theme.spacing(0.5)}>
        <Typography variant="body1" color={theme.palette.text.highEmphasis}>
          {PASSWORD_RESET_SUCCESS}
        </Typography>
        <Typography variant="body2" color={theme.palette.text.mediumEmphasis}>
          {PASSWORD_RESET_INSTRUCTION}
        </Typography>
      </StyleStack>
    </Wrapper>
  )
}

export default ResetPasswordStatusBar
