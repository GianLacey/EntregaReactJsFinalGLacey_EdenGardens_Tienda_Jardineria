
import './App.css';   
import MainLayout from './layouts/MainLayout';
import { MainRouter } from './router/MainRouter';
 
function App() {
  return (
    <MainLayout> 
      <MainRouter />
    </MainLayout>
  )
}

export default App
