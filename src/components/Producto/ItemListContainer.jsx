import React from "react";
import Productos from './productos.json'
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";


const ItemListContainer = (props) => {

    const productos = Productos.map(productos => productos)

    const [data,setData] = useState ([])

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        });
        getData.then(res => setData(res))


    })
    
    return (
        
        <div>

                  <ItemList data={data} />

        </div>

    )
}

export default ItemListContainer; 
