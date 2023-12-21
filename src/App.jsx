
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { MainRouter } from './router/MainRouter';
import { CartContext } from './context/CartContext';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  const confirmBuy = (product, count) => {

    const productAdd = {...product, count};

    const newCart = [...cart];
    const inCart = newCart.find((product)=> product.id === productAdd.id);

    if(inCart) {
        inCart.count += count;
    } else {
        newCart.push(productAdd);
    }

    setCart(newCart);
  }

  return (
    <CartContext.Provider value={ {cart, confirmBuy} }>
      <BrowserRouter>
        <MainLayout>
          <MainRouter />
        </MainLayout>
      </BrowserRouter> 
    </CartContext.Provider>

  )
}

export default App
