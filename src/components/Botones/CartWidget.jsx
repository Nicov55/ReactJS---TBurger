import React from "react";
import '../../assets/css/style.css';
import images from "../../assets/images/images.js";

const CartWidget = () => {
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

export default CartWidget; 
