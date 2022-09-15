import React from 'react';
import CartForm from './CartForm';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-8 cartmain">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">Pedido</h1>
                        {/* <!-- Cantidad de Items --> */}
                      <h6 className="mb-0 text-muted" id="cantidadpedidocarrito">CANTIDAD DE PRODUCTOS</h6>  
                    </div>
                        {/* <!-- Agregado de Productos --> */}
                    <hr className="my-4" />
                    <Link className="btn btn-secondary btn-sm" to='/index' role="button">Volver a la Tienda</Link>
                    <button type="button" className="btn btn-warning btn-sm vaciarcart">Vaciar Pedido</button>
                  </div>
                </div>
                <div className="col-lg-4 bg-grey">
                    <CartForm />
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}

export default Cart