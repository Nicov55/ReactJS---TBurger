import React from 'react';
import '../../../assets/css/style.css';
import { useCartContext } from '../../../context/CartContext';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {

  const [goToCart,setGoToCart] = useState (false);

  const {addProduct} = useCartContext ();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item,quantity);
  };

  return (
    <div className="card mb-3 detailcard">
      <div className="row g-0">
        <div className="col-md-6">
          <img src={item.image}className="img-fluid rounded-start detailimg" alt="..." />
        </div>
              <div className="col-md-6">
                <div className="card-body">
                  <br />
                  <h4 className="card-title card-header">{item.name}</h4>
                  <p className="card-text card-body">{item.description}</p>
                  <p className="card-text card-footer fw-bold text-end">${item.price}</p>
                <div className="text-end">
                {
                  goToCart 
                  ? <Link className = "btn btn-outline-success" role="button" to="/cart">Finalizar Pedido</Link>
                  : <ItemCount initial={1} stock={item.stock} onAdd= {onAdd} />
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail