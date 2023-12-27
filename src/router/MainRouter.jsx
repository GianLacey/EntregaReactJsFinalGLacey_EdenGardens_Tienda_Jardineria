import { Routes, Route } from 'react-router-dom';
import { Plant } from '../pages/Plant'
import { Home } from '../pages/Home';
import { ItemDetailContainer } from '../pages/ItemDetailContainer';
import { Cart } from '../components/Cart';
import { Contact } from '../pages/Contact';
import { Seeds } from '../pages/Seeds';
import { Pots } from '../pages/Pots';
import { Machines } from '../pages/Machines';
import { Tools } from '../pages/Tools';
import { Sustainable } from '../pages/Sustainable';
import { Services } from '../pages/Services';
import { Branches } from '../pages/Branches';
import { AboutUs } from '../pages/AboutUs';

export const MainRouter = () => {
  return (
    //BR recive childrens
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacto' element={<Contact />}></Route>
      <Route path='/sobrenosotros' element={<AboutUs />}></Route>
      <Route path='/sucursales' element={<Branches />}></Route>
      <Route path='/servicios' element={<Services />}></Route>
      <Route path='/sustentable' element={<Sustainable />}></Route>
      <Route path='/plantas' element={<Plant greeting='Plantas'/>}> </Route>
      <Route path='/semillas' element={<Seeds greeting='Semillas'/>}></Route>
      <Route path='/masetas' element={<Pots greeting='Masetas' />}></Route>
      <Route path='/herramientas' element={<Tools greeting='Herramientas' />}></Route>
      <Route path='/maquinas' element={<Machines greeting='Maquinas' />}></Route>
      <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      
    </Routes>
  )
}


// https://myapp.com/ --> Page Home
// https://myapp.com/catergory --> Page Category