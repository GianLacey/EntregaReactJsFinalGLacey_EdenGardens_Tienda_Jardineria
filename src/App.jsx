
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { MainRouter } from './router/MainRouter';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
