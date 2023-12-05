
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

  promesa.then(res => console.log(res)).catch(e => console.error(e));

  return (
    <MainLayout>
      <ItemListContainer greeting='Eden Gardens' />
      <CountComponent></CountComponent>
    </MainLayout>
  )
}

export default App
 