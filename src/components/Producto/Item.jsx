import React from 'react';
import '../../assets/css/style.css'
import { Link } from 'react-router-dom';

const Item = (item) => {

  return (
    <div className="col mb-5">
      <div className="card h-100" key={item.id}>
        {/* IMAGEN */}
          <img className="card-img-top imgburger" src={item.imagen} alt={item.nombre} />
          <div className="card-body p-4">
            <div className="text-center">
        {/* NOMBRE DEL PRODUCTO */}
                <h5 className="nombreburger fw-bolder" >{item.nombre}</h5>
        {/* PRECIO */}
                <p className="precio" id="precio-0">$ {item.precio}</p>
            </div>
          </div>
        {/* ACCIONES */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><Link to={`/detail/${item.id}`}className="botonagregar btn btn-outline-dark mt-auto">Ver detalles</Link></div>
          </div>
      </div>
    </div>
  )
}

export default Item