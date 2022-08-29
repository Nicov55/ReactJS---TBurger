import React from "react";

const Productos = (props) => {
    
    const {
        id,
        nombre,
        precio,
        imagen,
        descripcion,
        adicionales

    } = props;


    return (
        <div>
            <form className="d-flex">
                <a className="btn btn-outline-dark botoncart" href="." role="button">
                <img className="logocart" src={images.logocart} alt="logocart" />
                    <i className="bi-cart-fill me-1"></i>
                    <span className="badge bg-dark text-white ms-2 rounded-pill">0</span>
                </a>
            </form>
        </div>
    )
}

export default Productos; 
