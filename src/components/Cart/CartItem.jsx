import React from 'react'
import { useContext } from 'react'
import { useCartContext } from '../../context/CartContext'

const CartItem = ({product}) => {

  const {removeProduct} = useCartContext();
 
  return (
    <div>
      <div class="templatecarrito">
        <hr />
        <div class="row mb-4 d-flex justify-content-between align-items-center">
          <div class="col-md-2 col-lg-2 col-xl-2">
            {/* <!-- Imagen --> */}
            <img src={product.image} class="img-fluid rounded-3" alt={product.title} />
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            {/* <!-- Producto --> */}
            <h6 class="text-black mb-0">{product.title}</h6>
            <hr />
          </div>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
          {/* <!-- Cantidad --> */}
          <h6>{product.quantity}</h6>
          {/* <!-- Precio Unitario --> */}
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 class="mb-0">${product.price}</h6>
          </div>
          {/* <!-- Subtotal --> */}
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 class="mb-0">${product.quantity * product.price}</h6>
          </div>
          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
          </div>
          {/* <!-- Eliminar--> */}
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
