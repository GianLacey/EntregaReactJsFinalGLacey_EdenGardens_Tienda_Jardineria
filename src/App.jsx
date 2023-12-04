
import './App.css'

import { ItemListContainer } from './components/ItemsListContainer/ItemListContainer'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <MainLayout>
      <ItemListContainer greeting='Eden Gardens'/>
    </MainLayout>
  )
}

export default App
