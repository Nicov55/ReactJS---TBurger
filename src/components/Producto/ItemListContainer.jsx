import React from 'react';
import ItemCount from '../Botones/ItemCount';

const ItemListContainer = (greetings) => {

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades de ${greetings.nombre}`);
  }

  return (

<div className="col mb-5">
  <div className="card h-100" key={greetings.id}>
    
    {/* IMAGEN */}

      <img className="card-img-top imgburger" id="imgburger-0" src={greetings.imagen} alt="..." />

          <div className="card-body p-4">
              <div className="text-center">

    {/* NOMBRE DEL PRODUCTO */}

              <h5 className="nombreburger fw-bolder" >{greetings.nombre}</h5>

    {/* PRECIO */}
                    <p className="precio" id="precio-0">$ {greetings.precio}</p>


    {/* ABRO DETALLES */}
                    
                    <details>
                        <summary>Ingredientes</summary>  
                            <p className="descripcion" id="descripcion-0">{greetings.descripcion}</p>
                    </details>
                    </div>
                    </div>
    
    {/* ACCIONES  */}
                      <ItemCount inicial={1} stock={8} onAdd= {onAdd} />
                    </div>
                  </div>
  )
}

export default ItemListContainer