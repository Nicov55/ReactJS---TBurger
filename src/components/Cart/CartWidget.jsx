import React from "react";
import '../../assets/css/style.css';
import images from "../../assets/images/images.js";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

// Widget principal de carrito => Cart

const CartWidget = () => {

    const {totalProducts} = useCartContext ();

    return (
        <div>
            <form className="d-flex">
                <Link className="btn btn-outline-dark botoncart" to="/cart" role="button">
                <img className="logocart" src={images.logocart} alt="logocart" />
                    <i className="bi-cart-fill me-1"></i>
                    <span className="badge bg-dark text-white ms-2 rounded-pill">{totalProducts() || '0'}</span>
                </Link>
            </form>
        </div>
    )
}

export default CartWidget; 
