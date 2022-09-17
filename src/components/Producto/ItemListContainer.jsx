import React from "react";
import '../../assets/css/style.css'
import Products from './products.json'
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";


const ItemListContainer = (props) => {

    const products = Products.map(products => products)

    const [data,setData] = useState ([])

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        });
        getData.then(res => setData(res))
        .catch((error) => {
            console.log(error = "Ocurrio un error, intente nuevamente");
        });
    },[])
    
    return (
        <div>
            <ItemList data={data} />
        </div>

    )
}

export default ItemListContainer; 
