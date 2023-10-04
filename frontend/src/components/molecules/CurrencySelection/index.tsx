import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import styled from 'styled-components'
import { Tab, Tabs } from '@mui/material'
import { SCROLLBAR_DATA } from '@/strings/constant'
import theme from '@/theme'

export interface CurrencySelectionProps {
  onClick: (id: string) => void
}

const CustomTab = styled(Tab)({
  height: theme.spacing(9),
  marginRight: theme.spacing(6),
  borderRadius: theme.spacing(1),
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

const LowerParentGrid = styled(Grid)({
  display: 'flex',
  gap: theme.spacing(7),
  flexDirection: 'column',
  width: '100%',
})

const CurrencySelection = ({ onClick }: CurrencySelectionProps) => {
  const [tabValue, setTabValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  return (
    <Grid data-testid="currency-selection">
      <LowerParentGrid container>
        <Grid item xs={4} sm={6} md={11}>
          <CustomTabs
            value={tabValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable Tabs"
          >
            {SCROLLBAR_DATA.map((item, index) => (
              <CustomTab
                data-testid={`tab-${index}`}
                key={item.name}
                sx={{
                  background: item.background,
                }}
                label={item.name}
                value={index}
                onClick={() => {
                  onClick(item.name)
                }}
              />
            ))}
          </CustomTabs>
        </Grid>
      </LowerParentGrid>
    </Grid>
  )
}

export default CurrencySelection
