
import { useEffect } from 'react';
import { AsideFilter } from '../components/AsideFilter';

export const Plant = () => {

  //titulo de mi page  
  useEffect(() => {
    document.title = "Plantas"
  })

  return (
    <AsideFilter greeting='Plantas'/>
  )
}
