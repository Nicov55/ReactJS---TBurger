import React from 'react';
import '../../assets/css/style.css'
import Item from './Item';

// Mapeo de productos (data) recibido => Item

const ItemList = ({data=[]}) => {


  return (
        
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">   
          {data.map((product) =>(
              <Item
                item={product} 
                key={product.id} 
                imagen= {product.image} 
                nombre={product.name} 
                precio={product.price} 
                descripcion={product.description} 
                />
            ))}
      </div>
    </div>

  )
}

export default ItemList