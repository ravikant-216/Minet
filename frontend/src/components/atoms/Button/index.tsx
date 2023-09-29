import {
  Typography,
  Button,
  ButtonProps,
  SxProps,
  TypographyVariant,
} from '@mui/material'
interface ButtonComponentProps extends ButtonProps {
  label: string
  textColor: string
  sx?: SxProps
  hoverColor?: string
  typographyVarient?: TypographyVariant
}
const ButtonComponent = ({
  label,
  textColor,
  hoverColor,
  sx,
  typographyVarient,
  ...buttonProps
}: ButtonComponentProps) => {
  const hoverStyles: SxProps = {
    '&:hover': {
      backgroundColor: hoverColor || 'inherit',
    },
  }
  return (
    <Button
      data-testid="button"
      sx={{ ...sx, ...hoverStyles }}
      type="button"
      {...buttonProps}
    >
      <Typography color={textColor} variant={typographyVarient}>
        {label}
      </Typography>
    </Button>
  )
}

export default ButtonComponent
