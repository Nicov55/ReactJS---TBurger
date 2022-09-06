import React from 'react'
import ItemDetailContainer from './Producto/Detalles/ItemDetailContainer'
import ItemListContainer from './Producto/ItemListContainer'

const Main = () => {
  return (
    <div>
    <ItemListContainer />
    <ItemDetailContainer />  
    </div>
  )
}

export default Main