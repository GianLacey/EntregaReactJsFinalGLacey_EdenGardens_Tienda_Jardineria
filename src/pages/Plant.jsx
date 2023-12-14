
import { useEffect } from 'react';
import { ItemListContainer } from '../components/ItemsListContainer/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

export const Plant = () => {

  //titulo de mi page  
  useEffect(() => {
    document.title = "Plantas"
  })  

  const { productsData } = useGetProducts(6);
  return (
    <ItemListContainer greeting='Plantas' productsData= { productsData } />
  )
}
