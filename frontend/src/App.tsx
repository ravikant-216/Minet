import './App.css'
import { user } from './__mocks__'

import DashBoardPage from './pages/DashBoardPage'

export const App = () => {
  return <DashBoardPage user={user} />
}
