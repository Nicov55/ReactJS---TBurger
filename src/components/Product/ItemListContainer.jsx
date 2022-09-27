import React from "react";
import '../../assets/css/style.css'
import Products from './products.json'
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


// Llamado a Productos y guardado de estado (data) => ItemList


const ItemListContainer = () => {

    const products = Products.map(products => products);

    const [data,setData] = useState ([]);
    
    const {categoryId} = useParams();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });
        if(categoryId){
            getData.then(res => setData(res.filter(product=>product.category === categoryId)));
        }
        else {
            getData.then(res => setData(res))
            .catch((error) => {
            console.log(error = "Ocurrio un error, intente nuevamente")})            
        }

    },[categoryId,products]);
    
    return (
        <div>
            <ItemList data={data} />
        </div>

    )
}

export default ItemListContainer; 
