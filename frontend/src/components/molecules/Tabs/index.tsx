import theme from '@/theme'
import {
  Tabs as TabsComponent,
  Tab,
  TabProps as MuiTabProps,
  TabsProps as MuiTabsProps,
  Box,
  Typography,
  BoxProps,
} from '@mui/material'

interface TabsElement extends MuiTabProps {
  label: string
  value: string
}
interface TabsProps extends MuiTabsProps {
  tabs: TabsElement[]
  value?: string
  boxProps?: BoxProps
}

const Tabs = ({ tabs, value, boxProps, ...props }: TabsProps) => {
  return (
    <Box
      {...boxProps}
      borderBottom={1}
      borderColor={theme.palette.gamma.GREY_100}
    >
      <TabsComponent
        variant="scrollable"
        scrollButtons={false}
        value={value}
        {...props}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            data-testid={tab.value}
            {...tab}
            label={
              <Typography
                variant="subtitle2"
                color={
                  tab.value === value
                    ? theme.palette.primary[500]
                    : theme.palette.text.mediumEmphasis
                }
              >
                {tab.label}
              </Typography>
            }
          />
        ))}
      </TabsComponent>
    </Box>
  )
}

export default Tabs
