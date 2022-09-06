import React from 'react';
import '../../../assets/css/style.css';
import Productos from '../productos.json';
import ItemDetail from './ItemDetail';
import { useState } from "react";
import { useEffect } from "react";

const ItemDetailContainer = () => {

  const productos = Productos.map(productos => productos)

  const [item,setItem] = useState ([])

  useEffect(() => {
      const getItem = new Promise (resolve => {
          setTimeout(() => {
              resolve(productos[1])
          }, 2000)
      });
      getItem.then(res => setItem(res))


  })

  return (
    <div>
        
        <ItemDetail item={item} />
        
    </div>
  )
}

export default ItemDetailContainer