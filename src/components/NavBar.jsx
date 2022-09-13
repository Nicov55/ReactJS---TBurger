import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/style.css';
import images from "../assets/images/images";
import CartWidget from "./Botones/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container px-4 px-lg-5">
            <NavLink className="navbar-brand" to='/'><img src={images.logoburger} alt="BurgerLogo" width= "48" height= "48" /> T-BURGER</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ">
                    <li className="nav-item"><NavLink className="nav-link" to='/' aria-current="page" >Tienda</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/nosotros'>Nosotros</NavLink></li>
                </ul>
            </div>
            <NavLink to="/cart"><CartWidget /></NavLink>
        </div>
    </nav>
    )
}

export default NavBar; 

