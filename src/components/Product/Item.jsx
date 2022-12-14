import React from 'react';
import '../../assets/css/style.css'
import { Link } from 'react-router-dom';

// Renderizado en el DOM de productos recibidos por props de ItemList 

const Item = ({item}) => {

  return (
    <div className="col mb-5">
      <div className="card h-100" key={item.id}>
        {/* IMAGEN */}
          <img className="card-img-top imgburger" src={item.image} alt={item.name} />
          <div className="card-body p-4">
            <div className="text-center">
        {/* NOMBRE DEL PRODUCTO */}
                <h5 className="fw-bolder" >{item.name}</h5>
        {/* PRECIO */}
                <p className="fw-semibold">$ {item.price}</p>
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