import Image from '@/components/atoms/Image'
import { Stack, StackProps } from '@mui/material'

import { NavigationBarItem } from '@/utils/types'
import theme from '@/theme'

interface NavigationBarProps extends StackProps {
  navigationItems: NavigationBarItem[]
  handleOnClick: (value: string) => void
}

const NavigationBar = ({
  navigationItems: items,
  handleOnClick: onClick,
  ...props
}: NavigationBarProps) => {
  return (
    <Stack {...props} gap={11} justifyContent="center" pt={6} px={6}>
      {items.map(({ value, logo }) => (
        <Image
          boxProps={{ justifySelf: 'center' }}
          data-testid={value}
          imageProps={{ width: theme.spacing(8), height: theme.spacing(8) }}
          onClick={() => onClick(value)}
          src={logo}
          alt={value}
          key={value}
        />
      ))}
    </Stack>
  )
}

export default NavigationBar
