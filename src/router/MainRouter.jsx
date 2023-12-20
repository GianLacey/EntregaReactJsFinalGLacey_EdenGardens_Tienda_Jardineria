import { Routes, Route } from 'react-router-dom';
import { Plant } from '../pages/Plant'
import { Home } from '../pages/Home';
import { ItemDetailContainer } from '../pages/ItemDetailContainer';

export const MainRouter = () => {
  return (
    //BR recive childrens
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/plantas' element={<Plant />} />
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
    </Routes>
  )
}


// https://myapp.com/ --> Page Home
// https://myapp.com/catergory --> Page Category