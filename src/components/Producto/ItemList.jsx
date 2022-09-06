import React from 'react';
import ItemCount from '../Botones/ItemCount';
import Item from './Item';

const ItemList = (props) => {

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades de ${props.nombre}`);
  }

  return (

<div className="col mb-5">
  <div className="card h-100" key={props.id}>
    
    {/* IMAGEN */}

      <img className="card-img-top imgburger" id="imgburger-0" src={props.imagen} alt="..." />

          <div className="card-body p-4">
              <div className="text-center">

    {/* NOMBRE DEL PRODUCTO */}

              <h5 className="nombreburger fw-bolder" >{props.nombre}</h5>

    {/* PRECIO */}
                    <p className="precio" id="precio-0">$ {props.precio}</p>


    {/* ABRO DETALLES */}
                    
                    <details>
                        <summary>Ingredientes</summary>  
                            <p className="descripcion" id="descripcion-0">{props.descripcion}</p>
                    </details>
                    </div>
                    </div>
    
    {/* ACCIONES  */}
                      <ItemCount initial={1} stock={8} onAdd= {onAdd} />
                    </div>
                  </div>
  )
}

export default ItemList