import React, { useState } from 'react';
import { getFirestore, serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';




// Formulario de finalizacion de pedido => Cart

const CartForm = () => {

    const [nombre,setNombre] = useState('');
    const [envio,setEnvio] = useState('');
    const [domicilio,setDomicilio] = useState('');
    const [entrecalles,setEntrecalles] = useState('');
    const [telefono,setTelefono] = useState('');
    const [formapago,setFormapago] = useState('');
    const [montopago,setMontopago] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault ()
        const order = {
            buyer: {nombre, envio, domicilio, entrecalles, telefono, formapago, montopago},
            cart: cart,   
            date: serverTimestamp(),
            total: totalPrice 
        }
        const db = getFirestore ();
        const refOrder = collection(db,'orders');
        addDoc(refOrder, order)
        .then((res) => console.log(res))
    };
    const handleNombre = (e) => setNombre(e.target.value);
    const handleEnvio = (e) => setEnvio(e.target.value);
    const handleDomicilio = (e) => setDomicilio(e.target.value);
    const handleEntrecalles = (e) => setEntrecalles(e.target.value);
    const handleTelefono = (e) => setTelefono(e.target.value);
    const handleFormapago = (e) => setFormapago(e.target.value);
    const handleMontopago = (e) => setMontopago(e.target.value);

    const {totalPrice,cart} = useCartContext ();

    // const selectorDelivery = [
    //     {label : 'Quiero que me lo envien', value: 'Quiero que me lo envien'},
    //     {label : 'Lo retiro yo mismo', value: 'Lo retiro yo mismo'},
    // ];

    // const selectorPay = [
    //     {label : 'Efectivo', value: 'Efectivo'},
    //     {label : 'Mercado Pago', value: 'Mercado Pago'},
    // ]


    return (
        <div className='cartform'>
            <div className="p-5">
                <h3 className="fw-bold mb-5 mt-2 pt-1">Confirmar Pedido</h3>
                <hr className="my-4" />
                <form action='' className="form-group" onSubmit={handleSubmit}>
                    <div className="form-outline">
                        <h6>Complete los datos y recibirá su N° de Orden:</h6>
                            <input 
                            required 
                            type="text" 
                            placeholder='Nombre y Apellido - Ej: Carlos Perez' 
                            value={nombre} 
                            onChange={handleNombre} 
                            className="form-control form-control-sm valor" />
                        </div>
                        <br />

                    <h6 className=" mb-3">Envio/Retiro</h6>
                    <div className="mb-4 pb-2">
                        <select required onChange={handleEnvio} className="select valor">
                            <option value="1">Quiero que me lo envien</option>
                            <option value="2">Lo retiro yo mismo</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <div className="form-outline">
                            <input 
                            required 
                            type="text" 
                            placeholder='Domicilio - Ej: Rivadavia 22000'
                            value={domicilio} 
                            onChange={handleDomicilio}
                            className="form-control form-control-sm valor" />
                        </div>
                        <br />
                        <div className="mb-5">
                            <div className="form-outline">
                                <input 
                                required 
                                type="text" 
                                placeholder='Entrecalles - Ej: Entre Rondeau y Mariano Acosta' 
                                value={entrecalles} 
                                onChange={handleEntrecalles}
                                className="form-control form-control-sm valor" />
                            </div>
                            <br />
                            <div className="mb-5">
                                <div className="form-outline">
                                    <input 
                                    required 
                                    type="text" 
                                    placeholder='Telefono - Ej: 1144445555'
                                    value={telefono} 
                                    onChange={handleTelefono} 
                                    className="form-control form-control-sm valor" />
                                </div>
                                <br />
                                <h6 className=" mb-3">Forma de Pago</h6>

                                <div className="mb-5">
                                    <select required onChange={handleFormapago} className="select valor">
                                        <option value="1">Efectivo</option>
                                        <option value="2">Mercado Pago</option>
                                    </select>
                                    <br />
                                    <br />
                                    <div className="form-outline">
                                        <input 
                                        required 
                                        type="text" 
                                        placeholder='¿Con cuanto abona? - Ej: 4500' 
                                        value={montopago} 
                                        onChange={handleMontopago}
                                        className="form-control form-control-sm valor" />
                                    </div>   
                                </div>
                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-between mb-5">
                                        <h5 className="text-uppercase">Precio Final</h5>
                                        <h5>${totalPrice()}</h5>
                                    </div>
                                    <button className="btn btn-dark btn-block btn-lg botonconfirmado" id="botonconfirmado">Enviar Pedido</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CartForm