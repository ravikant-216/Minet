import Image from '@/components/atoms/Image'
import Tabs from '@/components/molecules/Tabs'
import { FILTER_DROPDOWN, TABS, TRADE_DATA } from '@/strings/constant'
import theme from '@/theme'
import {
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import searchIcon from '@Assets/icons/search.svg'
import crossIcon from '@Assets/icons/transaction_state.svg'
import dropdown from '@Assets/icons/chevron-down.svg'
import { useState } from 'react'
import { TableData } from '@/utils/types'
import TradeTabel from '@/components/molecules/TradingTable'

interface SearchTradeTableProps {
  onCardClick: (id: number) => void
  tradeTableData: TableData[]
  watchListData: TableData[]
  onStarIconClick: (id: number, checked: boolean) => void
}

const MainContainer = styled(Stack)({
  gap: theme.spacing(3),
})
const Container = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(3),
  justifyContent: 'space-between',
  alignItems: 'center',
})

const StyleDropdown = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  border: `1px solid ${theme.palette.gamma.GREY_100}`,
  borderRadius: theme.spacing(1),
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  height: theme.spacing(10),
  alignItems: 'stretch',
})

const StyleTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: theme.spacing(10),
    '&:focus fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.highEmphasis,
    fontSize: '16px',
  },
})

const StyleTypography = styled(Typography)({
  paddingLeft: theme.spacing(2),
  paddingTop: theme.spacing(1.2),
  color: theme.palette.gamma.GREY_500,
})
const SearchTradeTable = ({
  tradeTableData,
  watchListData,
  onStarIconClick,
  onCardClick,
}: SearchTradeTableProps) => {
  const [tabValue, setTabValue] = useState<string>(TABS[0].value)
  const [searchText, setSearchText] = useState<string>('')
  const [assets, setAssets] = useState<TableData[]>(tradeTableData)
  const [watchList, setWatchList] = useState<TableData[]>(watchListData)
  const displayedData = tabValue === TABS[0].value ? assets : watchList

  const onClearSearch = () => {
    if (searchText) {
      setSearchText('')
      setAssets(TRADE_DATA)
      setWatchList(TRADE_DATA.filter((data) => data.checked))
    }
  }

  const handleChange = (text: string) => {
    setSearchText(text)

    if (tabValue === TABS[0].value) {
      const filteredData = searchText
        ? TRADE_DATA.filter((asset) =>
            asset.name.toLowerCase().includes(text.toLowerCase())
          )
        : TRADE_DATA
      setAssets(filteredData)
    } else {
      const filteredData = searchText
        ? TRADE_DATA.filter(
            (row) =>
              row.name.toLowerCase().includes(text.toLowerCase()) && row.checked
          )
        : TRADE_DATA.filter((row) => row.checked)
      setWatchList(filteredData)
    }
  }

  const handleTabClick = () => {
    if (tabValue === TABS[0].value) {
      setTabValue(TABS[1].value)
      const filteredTradeData = searchText
        ? displayedData.filter(
            (data) =>
              data.name.toLowerCase().includes(searchText.toLowerCase()) &&
              data.checked
          )
        : displayedData.filter((data) => data.checked)
      setWatchList(filteredTradeData)
    } else {
      setTabValue(TABS[0].value)
      const filteredTradeData = searchText
        ? assets.filter((data) =>
            data.name.toLowerCase().includes(searchText.toLowerCase())
          )
        : assets
      setAssets(filteredTradeData)
    }
  }

  return (
    <MainContainer>
      <Container>
        <Tabs
          tabs={TABS}
          value={tabValue}
          onClick={handleTabClick}
          boxProps={{ flexGrow: 1 }}
        />
        <Stack gap={theme.spacing(3)} direction={'row'} mt={3}>
          <StyleTextField
            placeholder={'Search all assets'}
            value={searchText}
            onChange={(event) => handleChange(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {
                    <Image
                      src={searchText ? crossIcon : searchIcon}
                      alt={'Search Icon'}
                      imageProps={{
                        width: '32px',
                        height: '32px',
                      }}
                      boxProps={{
                        sx: {
                          cursor: 'pointer',
                        },
                      }}
                      onClick={onClearSearch}
                    />
                  }
                </InputAdornment>
              ),
            }}
            data-testid="searchField"
          />
          <Stack gap={theme.spacing(3)} direction={'row'}>
            {FILTER_DROPDOWN.map((data) => {
              return (
                <StyleDropdown
                  key={data.id}
                  data-testid={`dropdown-${data.id}`}
                >
                  <StyleTypography variant="body1">
                    {data.value}
                  </StyleTypography>
                  <Image
                    src={dropdown}
                    alt="drop-down"
                    imageProps={{
                      width: theme.spacing(8),
                      height: theme.spacing(8),
                    }}
                  />
                </StyleDropdown>
              )
            })}
          </Stack>
        </Stack>
      </Container>
      <TradeTabel
        cardClick={onCardClick}
        data={displayedData}
        watchlist={(id, checked) => onStarIconClick(id, checked)}
      />
    </MainContainer>
  )
}

export default SearchTradeTable
