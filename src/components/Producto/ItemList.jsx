import React from 'react';
import '../../assets/css/style.css'
import Item from './Item';

const ItemList = ({data=[]}) => {


  return (
        
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">   
          {data.map((producto) =>(
              <Item 
                key={producto.id} 
                imagen= {producto.imagen} 
                nombre={producto.nombre} 
                precio={producto.precio} 
                descripcion={producto.descripcion} 
                />
            ))}
      </div>
    </div>

  )
}

export default ItemList