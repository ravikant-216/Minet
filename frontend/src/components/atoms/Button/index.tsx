import { Typography, Button, ButtonProps, SxProps } from '@mui/material'
interface ButtonComponentProps extends ButtonProps {
  label: string
  textColor: string
  sx?: SxProps
  hoverColor?: string
}
const ButtonComponent = ({
  label,
  textColor,
  hoverColor,
  sx,
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
      <Typography color={textColor}>{label}</Typography>
    </Button>
  )
}

export default ButtonComponent
