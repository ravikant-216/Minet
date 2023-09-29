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
          border: { border },
          '&:hover': {
            backgroundColor: { background },
          },
        }}
      />
    </Box>
  )
}

export default ChipComponent
