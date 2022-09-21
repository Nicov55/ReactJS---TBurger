import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/style.css';
import images from "../assets/images/images";
import CartWidget from "./Botones/CartWidget";

const NavBar = () => {

    const categories = [
        {id:0, name:"Tienda", link:"/"},
        {id:1, name:"Nosotros", link:"/nosotros"},
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container px-4 px-lg-5">
                <NavLink className="navbar-brand" to='/'><img src={images.logoburger} alt="BurgerLogo" width= "48" height= "48" /> T-BURGER</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ">
                        {categories.map(cat => <li key={cat.id} className="nav-item"><NavLink className="nav-link" to={cat.link} aria-current="page" >{cat.name}</NavLink></li> )}
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar; 

