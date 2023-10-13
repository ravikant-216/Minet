import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMINE as string
const cilentId = process.env.REACT_APP_AUTH0_CLIENT_ID as string

const root = document.getElementById('root')

if (root !== null) {
  createRoot(root).render(
    <Auth0Provider
      domain={domain}
      clientId={cilentId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  )
}
