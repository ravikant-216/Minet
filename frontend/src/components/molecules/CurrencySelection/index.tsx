import React, { useState } from 'react'
import styled from 'styled-components'
import { Stack, StackProps, Tab, Tabs } from '@mui/material'
import { SCROLLBAR_DATA } from '@/strings/constant'
import theme from '@/theme'

export interface CurrencySelectionProps {
  onClick?: (id: string) => void
  stackProps?: StackProps
}

const CustomTab = styled(Tab)({
  height: theme.spacing(9),
  marginRight: theme.spacing(6),
  borderRadius: theme.spacing(2),
})

const CustomTabs = styled(Tabs)({
  '.MuiTabs-scrollButtons.Mui-disabled': {
    opacity: 0.5,
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '.Mui-selected': {
    border: ` ${theme.spacing(0.5)} solid ${
      theme.palette.tabs.BORDER
    } !important`,
    color: `${theme.palette.text.highEmphasis} !important`,
  },
})

const CurrencySelection = ({ onClick, stackProps }: CurrencySelectionProps) => {
  const [tabValue, setTabValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  return (
    <Stack data-testid="currency-selection" {...stackProps}>
      <CustomTabs
        value={tabValue}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable Tabs"
        sx={{ flexGrow: 1, justifyContent: 'center' }}
      >
        {SCROLLBAR_DATA.map((item, index) => (
          <CustomTab
            data-testid={`tab-${index}`}
            key={item.name}
            sx={{
              background: item.background,
              ml: theme.spacing(4),
              borderRadius: 1,
            }}
            label={item.name}
            value={index}
            onClick={() => {
              onClick?.(item.name)
            }}
          />
        ))}
      </CustomTabs>
    </Stack>
  )
}

export default CurrencySelection
