import { Routes, Route } from 'react-router-dom';
import { Plant } from '../pages/Plant'
import { Home } from '../pages/Home';
import { ItemDetailContainer } from '../pages/ItemDetailContainer';
import { Cart } from '../components/Cart';

export const MainRouter = () => {
  return (
    //BR recive childrens
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/plantas' element={<Plant />} />
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
  )
}


// https://myapp.com/ --> Page Home
// https://myapp.com/catergory --> Page Category