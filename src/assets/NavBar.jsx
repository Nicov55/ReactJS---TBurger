import React from "react";
import './css/estilos.css';
import imagenes from "./imagenes";

const Footer = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand"><img src={imagenes.logoburger} alt="BurgerLogo" width= "48" height= "48" /> T-BURGER</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ">
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="">Tienda</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Nosotros</a></li>
                </ul>
            </div>
            <form className="d-flex">
                <a className="btn btn-outline-dark disabled" href="" role="button">
                    <i className="bi-cart-fill me-1"></i>
                    Finalizar Pedido
                    <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </a>
            </form>
        </div>
    </nav>
    )
}

export default Footer; 

