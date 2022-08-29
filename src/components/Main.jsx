import React from "react";
import '../assets/css/style.css';
// import images from "../assets/images";
import Productos from './Productos/productos.json';
import adicionalesBase from './Adicionales/adicionalesBase.json'

const Main = () => {

    return (
        // TEMPLATE MAIN
        <div className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">    
                {
                    Productos.map(Producto => {
                        return (
                            <div className="col mb-5">
                            <div className="card h-100" key={Producto.id}>
                            {/* IMAGEN */}
                            <img className="card-img-top imgburger" id="imgburger-0" src={Producto.imagen} alt="..." />
                            {/* DETALLES */}
                            <div className="card-body p-4">
                            <div className="text-center">
                            {/* NOMBRE DEL PRODUCTO */}
                            <h5 className="nombreburger fw-bolder" id="0">{Producto.nombre}</h5>
                            {/* PRECIO */}
                            <p className="precio" id="precio-0">$ {Producto.precio}</p>
                            {/* ABRO DETALLES */}
                            <details>
                            <summary>Ingredientes</summary>  
                            <p className="descripcion" id="descripcion-0">{Producto.descripcion}</p>
                            </details>
                           
                            <div>
                            <details>
                            <summary>Adicionales</summary>
                            {
                            adicionalesBase.map(Adicional => {
                                return (
                                    <div className="form-check extras" id="extras" key={Adicional.id}> {Adicional.nombre} = ${Adicional.precio}
                                    <input className="form-check-input" type="checkbox" value="" id="adicional"/>
                                    </div>
                                )
                            } )
                            }
                            </details>
                            </div>
                            </div>
                            </div>
                            {/* ACCIONES  */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><button id="0" class="botonagregar btn btn-outline-dark mt-auto">Agregar al Pedido</button></div>
                            </div>
                            </div>
                                            </div>

                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Main; 