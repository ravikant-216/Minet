import ButtonComponent from '@/components/atoms/Button'
import InputField from '@/components/molecules/InputField'
import SocialLoginButton from '@/components/molecules/SocialLoginButton'
import {
  DO_NOT_HAVE_ACCOUNT,
  EMAIL,
  EMAIL_PLACEHOLDER,
  FORGOTPASSWORD,
  LOGIN_HEADING,
  OR,
  PASSWORD,
  PASSWORD_ENTER,
  SIGN_IN,
  SIGN_UP,
  SOCIAL_LOGIN_DATA,
} from '@/strings/constant'
import theme from '@/theme'
import { evaluatePasswordStrength, validateEmail } from '@/utils/credential'
import { Box, Divider, Stack, Typography, styled } from '@mui/material'
import { useState } from 'react'

const MainContainer = styled(Box)({
  width: theme.spacing(128),
  height: theme.spacing(152),
  gap: theme.spacing(6),
})
const Container = styled(Stack)({
  gap: theme.spacing(6),
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
  onSignIn: (email: string, password: string) => void
  onIconClick?: () => void
  onForgotPassword: () => void
  onSignup: () => void
}

const LogIn = ({
  onIconClick,
  onSignIn,
  onForgotPassword,
  onSignup,
}: LogInProps) => {
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

  const handleSignInClick = () => {
    onSignIn(email, password)
  }

  const isDisabled = !email || !!emailError || !password || !!passwordError
  return (
    <MainContainer data-testid="log-in">
      <Container>
        <Typography color={theme.palette.text.highEmphasis} variant="heading4">
          {LOGIN_HEADING}
        </Typography>
        <Stack gap={theme.spacing(6)}>
          <Stack>
            <InputField
              inputLabel={EMAIL}
              value={email}
              placeholder={EMAIL_PLACEHOLDER}
              error={emailError.length > 0}
              helperText={emailError}
              onChange={(e) => handleChange(e, 'email')}
              type="text"
              size="small"
            />
          </Stack>
          <Stack>
            <InputField
              inputLabel={PASSWORD}
              value={password}
              placeholder={PASSWORD_ENTER}
              error={passwordError.length > 0}
              helperText={passwordError}
              type="password"
              onChange={(e) => handleChange(e, 'password')}
              size="small"
            />
          </Stack>
          <ButtonComponent
            variant="text"
            label={FORGOTPASSWORD}
            onClick={onForgotPassword}
            typographyVarient="body2"
            textColor={theme.palette.primary.main}
            sx={{ width: theme.spacing(37) }}
          />
          <SignInButton
            hoverColor={theme.palette.primary.main}
            label={SIGN_IN}
            disabled={isDisabled}
            textColor={theme.palette.gamma.GREY_WHITE}
            variant="contained"
            onClick={handleSignInClick}
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
          <ButtonComponent variant="text" label={SIGN_UP} onClick={onSignup} />
        </Stack>
      </Container>
    </MainContainer>
  )
}

export default LogIn
