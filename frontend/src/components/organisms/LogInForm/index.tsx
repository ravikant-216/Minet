import ButtonComponent from '@/components/atoms/Button'
import InputField from '@/components/molecules/InputField'
import SocialLoginButton from '@/components/molecules/SocialLoginButton'
import {
  DO_NOT_HAVE_ACCOUNT,
  EMAIL,
  FORGOTPASSWORD,
  LOGIN_HEADING,
  OR,
  PASSWORD,
  SIGN_IN,
  SIGN_UP,
  SOCIAL_LOGIN_DATA,
} from '@/strings/constant'
import theme from '@/theme'
import { evaluatePasswordStrength, validateEmail } from '@/utils/credential'
import { Box, Divider, Stack, Typography, styled } from '@mui/material'
import { useState } from 'react'

const MainContainer = styled(Box)({
  padding: `${theme.spacing(24)} ${theme.spacing(8)}`,
  gap: theme.spacing(16),
})
const Container = styled(Stack)({
  gap: theme.spacing(8),
})

const SignInButton = styled(ButtonComponent)({
  backgroundColor: theme.palette.primary.main,
  height: theme.spacing(13),
  borderRadius: theme.spacing(1),
  '&.Mui-disabled': {
    backgroundColor: theme.palette.primary[300],
  },
})
interface LogInProps {
  onSignIn: () => void
  onIconClick: () => void
}

const LogIn = ({ onIconClick, onSignIn }: LogInProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    switch (field) {
      case 'email': {
        setEmail(event.target.value)
        setEmailError(validateEmail(event.target.value))
        return
      }
      case 'password': {
        setPassword(event.target.value)
        setPasswordError(evaluatePasswordStrength(event.target.value))
        return
      }
    }
  }
  const isDisabled = !email || !!emailError || !password || !!passwordError
  return (
    <MainContainer data-testId="log-in">
      <Container>
        <Typography color={theme.palette.text.highEmphasis} variant="h4">
          {LOGIN_HEADING}
        </Typography>
        <Stack gap={theme.spacing(6)}>
          <Stack>
            <InputField
              inputLabel={EMAIL}
              value={email}
              placeholder="you@company.com"
              onChange={(e) => handleChange(e, 'email')}
              type="text"
              size="small"
            />
            {emailError && (
              <Typography
                color={theme.palette.gamma.WARNING_300}
                variant="body2"
              >
                {emailError}
              </Typography>
            )}
          </Stack>
          <Stack>
            <InputField
              inputLabel={PASSWORD}
              value={password}
              placeholder="Enter Password"
              type="password"
              onChange={(e) => handleChange(e, 'password')}
              size="small"
            />
            {passwordError && (
              <Typography
                color={theme.palette.gamma.WARNING_300}
                variant="body2"
              >
                {passwordError}
              </Typography>
            )}
          </Stack>
          <ButtonComponent
            variant="text"
            label={FORGOTPASSWORD}
            typographyVarient="body2"
            textColor={theme.palette.primary.main}
            sx={{ width: theme.spacing(37) }}
          />
          <SignInButton
            hoverColor={theme.palette.primary.main}
            label={SIGN_IN}
            disabled={isDisabled}
            textColor="#FFFFFF"
            variant="contained"
            onClick={onSignIn}
          />
        </Stack>
        <Divider>
          <Typography
            color={theme.palette.text.mediumEmphasis}
            variant="caption1"
          >
            {OR}
          </Typography>
        </Divider>
        <Stack gap={theme.spacing(5)} direction={'row'}>
          {SOCIAL_LOGIN_DATA.map((data) => {
            return (
              <SocialLoginButton
                key={data.id}
                name={data.label}
                src={data.icon}
                onClick={onIconClick}
              />
            )
          })}
        </Stack>
        <Stack direction={'row'} alignItems={'center'}>
          <Typography color={theme.palette.text.mediumEmphasis} variant="body1">
            {DO_NOT_HAVE_ACCOUNT}
          </Typography>
          <ButtonComponent variant="text" label={SIGN_UP} />
        </Stack>
      </Container>
    </MainContainer>
  )
}

export default LogIn
