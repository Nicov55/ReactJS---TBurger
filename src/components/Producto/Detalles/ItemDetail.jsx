import React from 'react';
import '../../../assets/css/style.css';
import ItemCount from '../../Botones/ItemCount';
import Adicionales from '../Adicionales/Adicionales';

const ItemDetail = ({item}) => {
 
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades de ${item.nombre}`);
  };

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
            <ItemCount initial={1} stock={8} onAdd= {onAdd} />
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ItemDetail