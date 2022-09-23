import React from 'react';
import { useCartContext } from '../../context/CartContext';

const CartItem = ({product}) => {

  const {removeProduct} = useCartContext();
 
  return (
    <div>
      <div className="templatecarrito">
        <hr />
        <div className="row mb-4 d-flex justify-content-between align-items-center">
          <div className="col-md-3 col-lg-2 col-xl-2">
            {/* <!-- Imagen --> */}
            <img src={product.image} className="img-fluid rounded-3" alt={product.title} />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            {/* <!-- Producto --> */}
            <h5 className="text-black mb-0">{product.name}</h5>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-1 d-flex">
          {/* <!-- Precio Unitario --> */}
          <h6 className="text-end">${product.price}</h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-1 d-flex text-end">
            {/* <!-- Cantidad --> */}
          <h6 className="fs-7">{product.quantity} U</h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-1 d-flex text-end">
          {/* <!-- Subtotal --> */}
            <h6 className="mb-0 text-muted fs-7">Subtotal: ${product.quantity * product.price}</h6>
          </div>
          <div className="col-md-2 col-lg-3 col-xl-2 d-flex align-items-center justify-content-between">
          {/* <!-- Eliminar--> */}
          <button className='btn btn-danger' onClick={()=> removeProduct(product.id)}>X</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
