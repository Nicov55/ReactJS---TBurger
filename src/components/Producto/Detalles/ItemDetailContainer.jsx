import React from 'react';
import '../../../assets/css/style.css';
import Productos from '../productos.json';
import ItemDetail from './ItemDetail';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const productos = Productos.map(productos => productos)

  const [item,setItem] = useState ([])

  const {detailId} = useParams();

  useEffect(() => {

      const getItem = new Promise (resolve => {
          setTimeout(() => {
              resolve(productos)
          }, 2000)
      });
      getItem.then(res => setItem(res.find(productos => productos.id === parseInt(detailId))))
      .catch((error) => {
        console.log(error = "Ocurrio un error, intente nuevamente");
      });


  },[])

  return (
    <div>
        
        <ItemDetail item={item} />
        
    </div>
  )
}

export default ItemDetailContainer