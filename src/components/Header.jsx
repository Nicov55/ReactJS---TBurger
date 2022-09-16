import React from "react";
import '../assets/css/style.css';
import images from "../assets/images/images";


const Header = () => {
    return (
    <div className="bg-dark py-4 fondoheader">
        <div className="container px-2 px-lg-2 my-4">
            <div className="text-center text-white">
                &nbsp;
                <h1 className="display-5 fw-bolder titulo">T-BURGER</h1>
                <p><img className="tigerimage" alt="Cambiar imagen" height="130" src={images.logoburger} /></p>             
            </div>
        </div>
    </div>      
    )
}

export default Header; 