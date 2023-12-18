
import { useEffect } from 'react';
import { ItemListContainer } from '../components/ItemListContainer';
import { getProducts } from '../components/getProducts.js';

export const Plant = () => {

  //titulo de mi page  
  useEffect(() => {
    document.title = "Plantas"
  })

  const { plants } = getProducts();
  return (
    <ItemListContainer greeting='Plantas' products={plants} />
  )
}
