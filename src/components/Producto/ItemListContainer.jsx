import React from 'react';

const ItemListContainer = (greetings) => {
  return (

                    <div className="col mb-5">
                    <div className="card h-100" key={greetings.id}>
                    {/* IMAGEN */}
                    <img className="card-img-top imgburger" id="imgburger-0" src={greetings.imagen} alt="..." />
                    {/* DETALLES */}
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
                   
                    <div>

                    </div>
                    </div>
                    </div>
                    {/* ACCIONES  */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><button id="0" class="botonagregar btn btn-outline-dark mt-auto">Agregar al Pedido</button></div>
                    </div>
                    </div>
                    </div>
  )
}

export default ItemListContainer