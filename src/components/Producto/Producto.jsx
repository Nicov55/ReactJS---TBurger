import React from "react";
import Productos from "./productos.json";
import ItemListContainer from "./ItemListContainer";


const Producto = () => {
    
    const productos = Productos.map(productos => productos)
    
    
    return (
        <div className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">   
            {productos.map((producto) =>{
                return <ItemListContainer 
                key={producto.id} 
                imagen= {producto.imagen} 
                nombre={producto.nombre} 
                precio={producto.precio} 
                descripcion={producto.descripcion} 
                />
            })}
        </div>
        </div>
        </div>
    )
}

export default Producto; 
