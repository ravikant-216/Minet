import {
  EMAIL_IS_REQUIRED,
  EMAIL_REGEX,
  IN_VALID_EMAIL,
  IN_VALID_USERNAME,
  NAME_IS_REQUIRED,
  PasswordValidationMessage,
} from '@/strings/constant'

export const MIN_LENGTH = 8
export const SPECIAL_CHARS_REGEX = /[!@#$%^&*(),.?":{}|<>]/
export const NUMBER_REGEX = /\d/
export const LOWERCASE_REGEX = /[a-z]/
export const UPPERCASE_REGEX = /[A-Z]/
export const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,}$/
export const USERNAME_REGEX = /^(.{4,50})$/
export const numericRegex = /^\d*$/
export const alphabetRegex = /^[A-Za-z]+$/
export const validateEmail = (value: string) => {
  if (!value) return EMAIL_IS_REQUIRED
  else if (!EMAIL_REGEX.test(value)) return IN_VALID_EMAIL
  else return ''
}
export const validateName = (value: string) => {
  if (!value) return NAME_IS_REQUIRED
  else if (!USERNAME_REGEX.test(value)) return IN_VALID_USERNAME
  else return ''
}
export const evaluatePasswordStrength = (password: string): string => {
  if (password.length < MIN_LENGTH) {
    return PasswordValidationMessage.MESSAGE_MIN_LENGTH
  }

  if (!SPECIAL_CHARS_REGEX.test(password)) {
    return PasswordValidationMessage.MESSAGE_SPECIAL_CHARS_REGEX
  }

  if (!NUMBER_REGEX.test(password)) {
    return PasswordValidationMessage.MESSAGE_NUMBER_REGEX
  }

  if (!LOWERCASE_REGEX.test(password)) {
    return PasswordValidationMessage.MESSAGE_LOWERCASE_REGEX
  }

  if (!UPPERCASE_REGEX.test(password)) {
    return PasswordValidationMessage.MESSAGE_UPPERCASE_REGEX
  }

  if (password.includes(' ')) {
    return PasswordValidationMessage.MESSAGE_NO_SPACES
  }

  return ''
}
