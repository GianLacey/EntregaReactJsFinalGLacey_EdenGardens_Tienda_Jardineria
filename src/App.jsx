
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { MainRouter } from './router/MainRouter';
import { CartContext } from './context/CartContext';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={ {cart, setCart} }>
      <BrowserRouter>
        <MainLayout>
          <MainRouter />
        </MainLayout>
      </BrowserRouter> 
    </CartContext.Provider>

  )
}

export default App
