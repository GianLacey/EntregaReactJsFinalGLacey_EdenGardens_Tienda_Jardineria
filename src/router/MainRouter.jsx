import { Routes, Route } from 'react-router-dom';
import { Plant } from '../pages/Plant'
import { Home } from '../pages/Home';
import { ItemDetailContainer } from '../pages/ItemDetailContainer';
import { Cart } from '../components/Cart';
import { Contact } from '../pages/Contact';
import { Seeds } from '../pages/Seeds';
import { Flowerpot } from '../pages/Flowerpot';
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
      <Route path='/semillas y plantines' element={<Seeds greeting='Semillas & Plantines'/>}></Route>
      <Route path='/masetas' element={<Flowerpot greeting='Masetas' />}></Route>
      <Route path='/herramientas y maquinas' element={<Tools greeting='Herramientas & Maquinas' />}></Route>
      <Route path='/products/EoiK7bkC7jql6YGurdYj/:productType/:index' element={<ItemDetailContainer />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
  )
}

