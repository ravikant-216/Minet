import Image from '@/components/atoms/Image'
import theme from '@/theme'
import closeEye from '@Assets/icons/closeEye.svg'
import openEye from '@Assets/icons/openEye.svg'
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedTextFieldProps,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import React, { useState } from 'react'

export interface TextFieldProps extends Partial<OutlinedTextFieldProps> {
  style?: React.CSSProperties
  inputLabel?: string
}

const StyledTextField = styled(TextField)(
  ({
    padding = `${theme.spacing(3)} ${theme.spacing(4)}`,
    height = `${theme.spacing(6)}`,
  }: {
    padding: string
    height: string
  }) => ({
    marginTop: theme.spacing(1.5),
    width: '100%',
    '& placeholder': {
      color: `${theme.palette.text.lowEmphasis} !important`,
      ...theme.typography.body2,
      '&.Mui-focused': {
        color: `${theme.palette.text.highEmphasis} !important`,
      },
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.gamma.GREY_300,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.gamma.GREY_300,
        borderRadius: theme.spacing(2),
      },
      '& .MuiOutlinedInput-input': {
        padding: padding,
        height: height,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.gamma.GREY_300,
        display: 'flex',
        alignItems: 'center',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.gamma.GREY_300,
        border: `${theme.spacing(0.25)} solid ${theme.palette.gamma.GREY_300}`,
      },
    },
  })
)

const InputField: React.FC<TextFieldProps> = ({
  inputLabel = 'Input Label',
  ...props
}: TextFieldProps) => {
  const { type } = props
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Box>
      <Typography variant="body1" color={theme.palette.grey[700]}>
        {inputLabel}
      </Typography>
      <StyledTextField
        padding={props.style?.padding as string}
        height={props.style?.height as string}
        {...props}
        type={showPassword ? 'text' : type}
        InputProps={{
          ...props.InputProps,
          endAdornment: type === 'password' && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                sx={{ marginTop: theme.spacing(1) }}
              >
                {showPassword ? (
                  <Image src={openEye} alt="open eye" />
                ) : (
                  <Image src={closeEye} alt="close eye" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  )
}

export default InputField
