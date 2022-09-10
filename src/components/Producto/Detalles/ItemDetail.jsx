import React from 'react';
import '../../../assets/css/style.css';

const ItemDetail = ({item}) => {
  
  return (
<div className="card mb-3 detailcard">
  <div className="row g-0">
    <div className="col-md-6">
      <img src={item.imagen}className="img-fluid rounded-start detailimg" alt="..." />
    </div>
        <div className="col-md-6">
          <div className="card-body">
            <br />
            <h4 className="card-title card-header">{item.nombre}</h4>
            <p className="card-text card-body">{item.descripcion}</p>
            <p className="card-text card-footer fw-bold text-end">${item.precio}</p>
              <div className="text-end">
                <button className='btn btn-outline-dark mt-auto pedido'>Agregar al Pedido</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ItemDetail