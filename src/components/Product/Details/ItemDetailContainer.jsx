import React from 'react';
import '../../../assets/css/style.css';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

// Busca y envía información de un producto {item} => ItemDetail

const ItemDetailContainer = () => {

  const [item,setItem] = useState ([])

  const {detailId} = useParams();

  useEffect(() => {
      
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'products', detailId);
      getDoc(queryDoc)
      .then(res => setItem({id:res.id, ...res.data()}))
      
      .catch((error) => {
        console.log(error = "Ocurrio un error, intente nuevamente");
      });


  },[detailId])

  return (
    <div>
        
        <ItemDetail item={item} />
        
    </div>
  )
}

export default ItemDetailContainer