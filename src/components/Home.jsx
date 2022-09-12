import React from 'react'
import ItemDetailContainer from './Producto/Detalles/ItemDetailContainer'
import ItemListContainer from './Producto/ItemListContainer'

const Home = () => {
  return (
    <div>
    <ItemListContainer />
    <ItemDetailContainer />  
    </div>
  )
}

export default Home