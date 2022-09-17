import React from 'react';
import '../../../assets/css/style.css';
import Products from '../products.json';
import ItemDetail from './ItemDetail';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const products = Products.map(products => products)

  const [item,setItem] = useState ([])

  const {detailId} = useParams();

  useEffect(() => {

      const getItem = new Promise (resolve => {
          setTimeout(() => {
              resolve(products)
          }, 2000)
      });
      getItem.then(res => setItem(res.find(product => product.id === parseInt(detailId))))
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