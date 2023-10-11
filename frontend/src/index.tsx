import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

const root = document.getElementById('root')

if (root !== null) {
  createRoot(root).render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}
