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
        const producto = productos.find((prod) => prod.id === 1)
          setTimeout(() => {
              resolve(producto)
          }, 2000)
      });
      getItem.then(res => setItem(res))
      .catch((error) => {
        console.log("Ocurrio un error, intente nuevamente");
      });


  },[])

  return (
    <div>
        
        <ItemDetail item={item} />
        
    </div>
  )
}

export default ItemDetailContainer