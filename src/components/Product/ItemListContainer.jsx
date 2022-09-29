import React from "react";
import '../../assets/css/style.css'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



// Llamado a Productos y guardado de estado (data) => ItemList


const ItemListContainer = () => {

    const [data,setData] = useState ([]);
    
    const {categoryId} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = query(
            collection(db, "products")
        );

        if (categoryId) {
            const queryFilter = query(
                queryCollection, 
                where('category','==',categoryId)
                )
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(product=> ({id:product.id,...product.data()}))));
        } 

        else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product=> ({id:product.id,...product.data()})))); 
        }

        },[categoryId]);
    
    return (
        <div>
            <ItemList data={data} />
        </div>

    )
}

export default ItemListContainer; 
