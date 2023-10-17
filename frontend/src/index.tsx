import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import { StrictMode } from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMINE as string
const cilentId = process.env.REACT_APP_AUTH0_CLIENT_ID as string

const root = document.getElementById('root')

if (root !== null) {
  createRoot(root).render(
    <StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={cilentId}
        cacheLocation="localstorage"
        authorizationParams={{
          redirect_uri: window.origin + '/login',
        }}
      >
        <App />
      </Auth0Provider>
    </StrictMode>
  )
}
