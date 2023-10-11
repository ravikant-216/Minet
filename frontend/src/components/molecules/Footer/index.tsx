import ButtonComponent from '@/components/atoms/Button'
import {
  CAREERS,
  DASHBOARD,
  LEGAL_AND_PRIVACY,
  MINET_TRADEMARK,
  NEED_HELP,
} from '@/strings/constant'
import theme from '@/theme'
import { Box, BoxProps, Stack, Typography } from '@mui/material'
import Dropdown from '@Components/molecules/Dropdown'

interface FooterProps extends BoxProps {
  width?: BoxProps['width']
}

const Footer = ({
  width = `calc(100% - ${theme.spacing(12)})`,
  ...props
}: FooterProps) => {
  return (
    <Box
      component="footer"
      position="fixed"
      left={theme.spacing(6)}
      bottom={theme.spacing(6)}
      py={6}
      width={width}
      {...props}
    >
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack direction="row" alignItems="center" gap={6}>
          <ButtonComponent
            typographyVarient="body2"
            label={DASHBOARD}
            variant="text"
            textColor={theme.palette.primary[500]}
          />
          <ButtonComponent
            typographyVarient="body2"
            label={CAREERS}
            variant="text"
            textColor={theme.palette.primary[500]}
          />
          <ButtonComponent
            typographyVarient="body2"
            label={LEGAL_AND_PRIVACY}
            variant="text"
            textColor={theme.palette.primary[500]}
          />
          <Typography variant="body2">{MINET_TRADEMARK}</Typography>
        </Stack>
        <Stack direction="row" gap={6}>
          <Dropdown size="small" padding={theme.spacing(0)}>
            {[
              <Typography
                key={1}
                variant="body2"
                color={theme.palette.text.highEmphasis}
              >
                English
              </Typography>,
            ]}
          </Dropdown>
          <ButtonComponent
            label={NEED_HELP}
            variant="outlined"
            textColor={theme.palette.primary[500]}
            sx={{
              width: '100%',
            }}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer
