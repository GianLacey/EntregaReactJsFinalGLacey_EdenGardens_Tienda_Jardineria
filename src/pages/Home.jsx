import React, { useEffect } from 'react'
import { Main } from '../components/main/Main'

export const Home = () => {

  useEffect(() => {
    document.title = "Eden Gardens | Tienda Online de artículos para huerta, jardinería y paisajismo"
  })

  return (
    <div>
      <Main></Main>
    </div>
  )
}
