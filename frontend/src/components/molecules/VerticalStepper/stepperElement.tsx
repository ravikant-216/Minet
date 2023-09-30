import Image from '@/components/atoms/Image'
import theme from '@/theme'
import { Box, Typography, styled } from '@mui/material'

interface StepperProps {
  icon: string
  text: string
  value: string
}

const IconBox = styled(Box)({
  display: 'grid',
  alignItems: 'center',
  marginRight: theme.spacing(2),
})

const StepperElement = ({ icon, text, value }: StepperProps) => {
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <IconBox>
          <Image src={icon} alt={text} />
        </IconBox>
        <Box>
          <Typography
            variant="caption2"
            color={theme.palette.text.secondary}
            sx={{ marginBottom: theme.spacing(0.5) }}
          >
            {text}
          </Typography>
          <Typography variant="body1" color={theme.palette.text.highEmphasis}>
            {value}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default StepperElement
