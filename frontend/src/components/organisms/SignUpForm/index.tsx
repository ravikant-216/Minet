import ButtonComponent from '@/components/atoms/Button'
import InputField from '@/components/molecules/InputField'
import SocialLoginButton from '@/components/molecules/SocialLoginButton'
import {
  ALREADY_HAVE_AN_ACCOUNT,
  CREATE_PASSWORD_PLACEHOLDER,
  EMAIL,
  EMAIL_PLACEHOLDER,
  LOGIN,
  NAME_LABEL,
  NAME_PLACEHOLDER,
  OR,
  PASSWORD,
  PASSWORD_CHECK,
  SIGN_UP_BUTTON,
  SOCIAL_LOGIN_DATA,
  SignUP,
} from '@/strings/constant'
import theme from '@/theme'
import {
  evaluatePasswordStrength,
  validateEmail,
  validateName,
} from '@/utils/credential'
import { Box, Divider, Stack, Typography, styled } from '@mui/material'
import { useState } from 'react'

const MainContainer = styled(Box)({
  width: theme.spacing(128),
  height: theme.spacing(152),
  gap: theme.spacing(6),
  marginTop: theme.spacing(5),
})
const Container = styled(Stack)({
  gap: theme.spacing(6),
})

const SignUpButton = styled(ButtonComponent)({
  backgroundColor: theme.palette.primary.main,
  height: theme.spacing(13),
  borderRadius: theme.spacing(1),
  '&.Mui-disabled': {
    backgroundColor: theme.palette.primary[300],
  },
})
interface SignUpProps {
  onSignUp: (name: string, email: string, password: string) => void
  onIconClick: () => void
  onSignIn?: () => void
}

const SignUp = ({ onIconClick, onSignUp, onSignIn }: SignUpProps) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value)
    setNameError(validateName(event.target.value))
  }

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value)
    setEmailError(validateEmail(event.target.value))
  }
  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value)
    setPasswordError(evaluatePasswordStrength(event.target.value))
  }

  const handleSignUpClick = () => {
    onSignUp(name, email, password)
  }

  const isDisabled =
    !name ||
    !!nameError ||
    !email ||
    !!emailError ||
    !password ||
    !!passwordError
  return (
    <MainContainer data-testId="sign-up">
      <Container>
        <Typography color={theme.palette.text.highEmphasis} variant="heading4">
          {SignUP}
        </Typography>
        <Stack gap={theme.spacing(6)}>
          <Stack>
            <InputField
              inputLabel={NAME_LABEL}
              value={name}
              error={nameError.length > 0}
              helperText={nameError}
              placeholder={NAME_PLACEHOLDER}
              onChange={handleNameChange}
              type="text"
              size="small"
            />
          </Stack>
          <Stack>
            <InputField
              inputLabel={EMAIL}
              value={email}
              error={emailError.length > 0}
              helperText={emailError}
              placeholder={EMAIL_PLACEHOLDER}
              onChange={handleEmailChange}
              type="text"
              size="small"
            />
          </Stack>
          <Stack>
            <InputField
              inputLabel={PASSWORD}
              value={password}
              error={passwordError.length > 0}
              helperText={passwordError}
              placeholder={CREATE_PASSWORD_PLACEHOLDER}
              type="password"
              onChange={handlePasswordChange}
              size="small"
            />
          </Stack>
          <Typography variant="caption2" color={theme.palette.gamma.GREY_500}>
            {PASSWORD_CHECK}
          </Typography>
          <SignUpButton
            hoverColor={theme.palette.primary.main}
            label={SIGN_UP_BUTTON}
            disabled={isDisabled}
            textColor={theme.palette.gamma.GREY_WHITE}
            variant="contained"
            onClick={handleSignUpClick}
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
        <Stack
          gap={theme.spacing(5)}
          direction={'row'}
          justifyContent={'space-between'}
        >
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
            {ALREADY_HAVE_AN_ACCOUNT}
          </Typography>
          <ButtonComponent variant="text" label={LOGIN} onClick={onSignIn} />
        </Stack>
      </Container>
    </MainContainer>
  )
}

export default SignUp
