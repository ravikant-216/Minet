import {
  Box,
  Chip,
  ChipProps,
  Typography,
  TypographyProps,
} from '@mui/material'

interface IChipProps extends ChipProps {
  label: string
  textVariant: TypographyProps['variant']
  textColor: string
  background: string
  padding?: string
  borderRadius?: string
  height?: string
  border?: string
  width?: string
  isClicked?: boolean
  handleChip?: () => void
}

const ChipComponent = ({
  label,
  textVariant,
  textColor,
  background,
  padding,
  borderRadius,
  height,
  width,
  isClicked,
  border,
  handleChip,
}: IChipProps) => {
  return (
    <Box>
      <Chip
        data-testid="chip"
        onClick={handleChip}
        label={
          <Typography variant={textVariant} color={textColor}>
            {label}
          </Typography>
        }
        sx={{
          height: { height },
          width: { width },
          backgroundColor: { background },
          padding: { padding },
          borderRadius: { borderRadius },
          border: isClicked ? { border } : 'none',
          '&:hover': {
            backgroundColor: { background },
          },
        }}
      />
    </Box>
  )
}

export default ChipComponent
