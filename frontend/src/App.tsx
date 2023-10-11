import { ThemeProvider } from '@emotion/react'
import './App.css'
import theme from '@/theme/index'
import DetailPage from './pages/DetailPage'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DetailPage
        cryptoId="7590808b-044e-4140-b34b-9466cdc15cca"
        userId="b62177be-aca1-45d3-ab0e-60a9f4c79a5e"
      />
    </ThemeProvider>
  )
}
