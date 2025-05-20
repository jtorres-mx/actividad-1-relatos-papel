// src/components/carrito-de-compra.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/Context.jsx";
import "./Checkout.css";

export const CarritoCompra = () => {
    const { allProducts, total, onDeleteProduct, onClearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handlePay = () => {
        alert("pago satisfactorio");
        onClearCart();
        navigate("/home");
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            {allProducts.length > 0 ? (
                <>
                    <div className="checkout__books">
                        {allProducts.map((product) => (
                            <div className="checkout__item-book" key={product.id}>
                                <div className="checkout__info-book">
                                    <span className="checkout__book-name">{product.cantidad}</span>
                                    <p className="checkout__book-name">{product.nombreLibro}</p>
                                    <span className="checkout__book-price">${product.precio}</span>
                                </div>
                                <button className="checkout__delete_button" onClick={() => onDeleteProduct(product)}>
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart__total">
                        <h3>Total a pagar: ${total}</h3>
                    </div>
                    <div>
                        <button className="checkout__clear-button" onClick={onClearCart}>
                            Vaciar Carrito
                        </button>
                        <button className="checkout__pay-button" onClick={handlePay}>Pagar</button>
                    </div>
                </>
            ) : (
                <p className="cart-empty">Tu carrito está vacío.</p>
            )}
        </div>
    );
};
