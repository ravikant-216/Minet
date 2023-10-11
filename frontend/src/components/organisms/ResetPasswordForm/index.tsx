import { useEffect, useState } from 'react'
import { Box, Typography, buttonClasses } from '@mui/material'
import InputField from '@/components/molecules/InputField'
import ButtonComponent from '@/components/atoms/Button'
import ResetPasswordStatusBar from '@/components/molecules/ResetPasswordStatusBar'
import theme from '@/theme'
import {
  PASSWORD_HINT,
  PASSWORD_MESSAGE,
  PASSWORD_MATCH,
  PASSWORD_RE_ENTER,
  PASSWORD_ENTER,
  LOGIN,
  RESET_PASSWORD,
  PASSWORD_REGEX,
} from '@/strings/constant'
export interface ResetPasswordFormProps {
  onSubmit?: (value: string) => void
  onSuccess?: () => void
  step?: number
}

const ResetPasswordForm = ({
  onSubmit,
  onSuccess,
  step = 1,
}: ResetPasswordFormProps) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    const valid = PASSWORD_REGEX.test(password)
    setIsDisabled(!valid)
    if (valid || password === '') {
      setError('')
    } else {
      setError(PASSWORD_HINT)
    }
  }, [password])

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={9}
      justifyContent={'center'}
    >
      <Typography variant="heading4" color={theme.palette.text.highEmphasis}>
        {RESET_PASSWORD}
      </Typography>
      <Box display="flex" flexDirection="column" gap={6}>
        {step === 1 ? (
          <>
            <InputField
              type="password"
              inputLabel={PASSWORD_ENTER}
              placeholder={PASSWORD_ENTER}
              error={error.length > 0}
              helperText={error}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              type="password"
              inputLabel={PASSWORD_RE_ENTER}
              placeholder={PASSWORD_RE_ENTER}
              error={confirmPassword !== '' && password !== confirmPassword}
              helperText={
                confirmPassword && password !== confirmPassword
                  ? PASSWORD_MATCH
                  : ''
              }
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Typography variant="caption2" color={theme.palette.gamma.GREY_500}>
              {PASSWORD_MESSAGE}
            </Typography>
          </>
        ) : (
          <ResetPasswordStatusBar width="100%" />
        )}
        <ButtonComponent
          label={step === 1 ? RESET_PASSWORD : LOGIN}
          variant="contained"
          disabled={(password !== confirmPassword || isDisabled) && step === 1}
          onClick={() => (step === 1 ? onSubmit?.(password) : onSuccess?.())}
          textColor={theme.palette.gamma.GREY_WHITE}
          hoverColor={theme.palette.primary.main}
          sx={{
            [`&.${buttonClasses.disabled}`]: {
              background: theme.palette.primary[300],
            },
            height: theme.spacing(10.5),
            borderRadius: theme.spacing(1),
            width: '100%',
          }}
        />
      </Box>
    </Box>
  )
}

export default ResetPasswordForm
