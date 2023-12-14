import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Plant } from '../pages/Plant'

export const MainRouter = () => {
  return (
    //BR recive childrens
    <BrowserRouter>
        <Routes>
            <Route path='/plantas' element={<Plant />}/>
        </Routes>
    </BrowserRouter>
  )
}


// https://myapp.com/ --> Page Home
// https://myapp.com/catergory --> Page Category