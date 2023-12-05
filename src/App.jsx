
import './App.css'
import CountComponent from './components/CountComponent/CountComponent'

import { ItemListContainer } from './components/ItemsListContainer/ItemListContainer'
import MainLayout from './layouts/MainLayout'

function App() {

  const promesa = new Promise((resolve, reject) => {
    
    const flag = false;

    if(flag) {
      resolve('Promesa correcta');
    } else {
      reject('Promesa negativa');
    }
    
  });

  const array = [1, 2, 3, 4, 5, 6, 7]

  promesa.then(res => console.log(res)).catch(e => console.error(e));

  return (
    <MainLayout>
      <ItemListContainer greeting='Eden Gardens' />
      <CountComponent></CountComponent>
      <ul className='ml-5 p-5 text-lime-600 bg-gray-900 inline-flex'>
        {
          array.map(item =>{
            return (
              <li>
                {item}
              </li>
            )
          })
        }
      </ul>
    </MainLayout>
  )
}

export default App
 