import ButtonComponent from '@/components/atoms/Button'
import theme from '@/theme'
import InputField from '@Components/molecules/InputField'
import { Box, SxProps, Typography, buttonClasses } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  EMAIL,
  FORGOTPASSWORD,
  RESET_CODE,
  RESET_PASSWORD,
  LOGIN,
  BACK,
  MOCK_MAIL,
  EMAIL_REGEX,
  CODE,
  RESET_LINK,
} from '@/strings/constant'
export interface ForgotPasswordFormProps {
  loginOnClick: () => void
  onSubmit?: (value: string) => void
  onSuccess?: () => void
  step?: number
  sx?: SxProps
}

const ForgotPasswordForm = ({
  loginOnClick,
  onSubmit,
  onSuccess,
  step = 1,
  sx,
}: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (step === 1) {
      setIsDisabled(!EMAIL_REGEX.test(email))
    } else {
      setIsDisabled(code.length !== 8)
    }
  }, [email, code, step])

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent="center"
      width={theme.spacing(128)}
      gap={8}
      sx={{ ...sx, height: '100%' }}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyItems={'center'}
        gap={6}
      >
        <Typography variant="heading4" color={theme.palette.text.highEmphasis}>
          {FORGOTPASSWORD}
        </Typography>
        <InputField
          inputLabel={step === 1 ? EMAIL : RESET_CODE}
          placeholder={step === 1 ? MOCK_MAIL : CODE}
          type="text"
          size="medium"
          value={step === 1 ? email : code}
          onChange={(e) =>
            step === 1 ? setEmail(e.target.value) : setCode(e.target.value)
          }
        />
        <ButtonComponent
          label={step === 1 ? RESET_LINK : RESET_PASSWORD}
          variant="contained"
          disabled={isDisabled}
          onClick={() => {
            step === 1 ? onSubmit?.(email) : onSuccess?.()
          }}
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
      <Box display="flex" gap={1}>
        <Typography variant="body1" color={theme.palette.text.mediumEmphasis}>
          {BACK}
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.primary[500]}
          onClick={() => {
            loginOnClick()
          }}
          sx={{ cursor: 'pointer' }}
        >
          {LOGIN}
        </Typography>
      </Box>
    </Box>
  )
}

export default ForgotPasswordForm
