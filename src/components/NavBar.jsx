import React from "react";
import '../assets/css/style.css';
import images from "../assets/images/images";
import CartWidget from "./Botones/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand"><img src={images.logoburger} alt="BurgerLogo" width= "48" height= "48" /> T-BURGER</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ">
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="../public/index.html">Tienda</a></li>
                    <li className="nav-item"><a className="nav-link" href=".">Nosotros</a></li>
                </ul>
            </div>
        <CartWidget />
        </div>
    </nav>
    )
}

export default NavBar; 

