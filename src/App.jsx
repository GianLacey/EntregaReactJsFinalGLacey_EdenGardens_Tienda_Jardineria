
import './App.css';   
import { ItemListContainer } from './components/ItemsListContainer/ItemListContainer';
import MainLayout from './layouts/MainLayout';
import { useGetProducts } from './hooks/useProducts';
 

function App() {

  const { productsData} = useGetProducts(6);

  return (
    <MainLayout> 
      <ItemListContainer greeting='Tienda' productsData= { productsData } />
      
    </MainLayout>
  )
}

export default App
