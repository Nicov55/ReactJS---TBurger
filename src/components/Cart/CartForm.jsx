import React from 'react';
import { useCartContext } from '../../context/CartContext';

const CartForm = () => {

    const {totalPrice} = useCartContext ();

    return (
        <div className='cartform'>
            <div className="p-5">
                <h3 className="fw-bold mb-5 mt-2 pt-1">Confirmar Pedido</h3>
                <hr className="my-4" />
                <div className="form-group">
                    <h5 className=" mb-3">Envio/Retiro</h5>
                    <div className="mb-4 pb-2">
                        <select className="select valor">
                            <option value="1">Quiero que me lo envien</option>
                            <option value="2">Lo retiro yo mismo</option>
                        </select>
                    </div>

                    <p>Domicilio</p>
                    <div className="mb-5">
                        <div className="form-outline">
                            <input type="text" id="form3Examplea2" className="form-control form-control-sm valor" />
                        </div>
                        <br />

                        <p>Entrecalles</p>
                        <div className="mb-5">
                            <div className="form-outline">
                                <input type="text" id="form3Examplea2" className="form-control form-control-sm valor" />
                            </div>
                            <br />

                            <p>Telefono</p>
                            <div className="mb-5">
                                <div className="form-outline">
                                    <input type="text" id="form3Examplea2" className="form-control form-control-sm valor" />
                                </div>
                                <br />
                                <h5 className=" mb-3">Forma de Pago</h5>

                                <div className="mb-4 pb-2">
                                    <select className="select valor">
                                        <option value="1">Efectivo</option>
                                        <option value="2">Mercado Pago</option>
                                    </select>
                                    <br />
                                    <br />    
                                    <p className="form-p">¿Con cuanto abona?</p>
                                </div>
                                    <div className="form-outline">
                                        <input type="text" id="form3Examplea2" className="form-control form-control-sm valor" />
                                    </div>
                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-between mb-5">
                                        <h5 className="text-uppercase">Precio Final</h5>
                                        <h5>${totalPrice()}</h5>
                                    </div>
                                    <button type="button" className="btn btn-dark btn-block btn-lg botonconfirmado" id="botonconfirmado">Enviar Pedido</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartForm