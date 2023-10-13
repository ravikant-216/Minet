import './App.css'
import PurchagePage from '@Pages/PurchasePage'
import { user } from './__mocks__'

export const App = () => {
  return <PurchagePage user={user} />
}
