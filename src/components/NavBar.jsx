import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/style.css';
import images from "../assets/images/images";
import CartWidget from "./Cart/CartWidget";

const NavBar = () => {

    const categories = [
        {id:0, name:"Menu Completo", link:"/"},
        {id:1, name: "Burgers Dobles", link: "categories/doble"},
        {id:2, name: "Burgers Triples", link: "categories/triple"},
        {id:3, name: "Burgers Veggies", link: "categories/veggie"},
        {id:4, name: "Menu Infantil", link: "categories/kids"},
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
            <div className="container px-4 px-lg-5">
                <NavLink className="navbar-brand" to='/'><img src={images.logoburger} alt="BurgerLogo" width= "48" height= "48" /> T-BURGER</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav fw-semibold">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tienda
                    </a>
                    <ul className="dropdown-menu">
                    {categories.map(cat => <li key={cat.id} className="dropdown-item categories"><NavLink className="nav-link" to={cat.link} aria-current="page" >{cat.name}</NavLink></li> )}
                    </ul>
                </li>
                <li className="nav-item"><NavLink className="nav-link" to="/nosotros" aria-current="page" >Nosotros</NavLink></li>
                </ul>
            </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar; 

