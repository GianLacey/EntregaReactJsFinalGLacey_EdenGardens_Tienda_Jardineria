
import './App.css'

import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemsListContainer/ItemListContainer'

function App() {

  return (
    <div className='container-fluid'>
      <NavBar/>
      <ItemListContainer greeting='Eden Gardens'/>
    </div>
  )
}

export default App
