import React from 'react';
import CartForm from './CartForm';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useCartContext } from '../../context/CartContext';

const Cart = () => {

  const {cart,totalPrice,clearCart} = useCartContext ();

  if (cart.length === 0) {
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
                    <p>No hay productos en el carrito</p>
                    <hr className="my-4" />
                     <Link className="btn btn-secondary" to='/' role="button">Volver a la Tienda</Link>
                     <button onClick={clearCart} type="button" className="btn btn-warning vaciarcart">Vaciar Pedido</button>
                   </div>
                </div>
                <div className="col-lg-4 bg-grey">
                    <CartForm/>
                 </div>
               </div>
             </div>
          </div>
        </div>
    );
  };

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
                    {cart.map(product => <CartItem key={product.id} product={product}/>)}
                    <hr />
                    <p className='text-end fs-5 fw-semibold'>Precio Total: ${totalPrice()}</p>
                    <Link className="btn btn-secondary" to='/' role="button">Volver a la Tienda</Link>
                    <button onClick={clearCart} type="button" className="btn btn-warning vaciarcart">Vaciar Pedido</button>
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