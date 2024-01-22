
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { MainRouter } from './router/MainRouter';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';
function App() {


  return (
    <CartProvider>
      <BrowserRouter>
      <ScrollToTop />
        <MainLayout>
          <MainRouter />
        </MainLayout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
