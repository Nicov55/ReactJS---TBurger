import React from "react";
import '../assets/css/style.css';
// import images from "../assets/images";

const Main = () => {
    return (
        // TEMPLATE MAIN
        <div className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                <div class="col mb-5">
                <div class="card h-100">
                {/* IMAGEN */}
                <img class="card-img-top imgburger" id="imgburger-0" src="" alt="..." />
                {/* DETALLES */}
                <div class="card-body p-4">
                <div class="text-center">
                {/* NOMBRE DEL PRODUCTO */}
                <h5 class="nombreburger fw-bolder" id="0">Burger 0 </h5>
                {/* PRECIO */}
                <p class="precio" id="precio-0">$ Aca el precio</p>
                {/* ABRO DETALLES */}
                <details>
                <summary>Ingredientes</summary>  
                <p class="descripcion" id="descripcion-0">Aca la descripcion</p>
                </details>
                <details>
                <summary>Adicionales</summary>  
                <div class="form-check extras" id="extras0">
                <input class="form-check-input" type="checkbox" value="" id="adicional"/>
                </div>
                </details>
                </div>
                </div>
                {/* ACCIONES  */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><button id="0" class="botonagregar btn btn-outline-dark mt-auto">Agregar al Pedido</button></div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main; 