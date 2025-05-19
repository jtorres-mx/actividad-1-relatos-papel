import React, { useState, useContext } from "react";
import { CartContext } from "../Context/Context.jsx";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    const { allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal } = useContext(CartContext);
    const [active, setActive] = useState(false);

    const onDeleteProduct = (product) => {
        const results = allProducts.filter(item => item.id !== product.id);
        setTotal(prevTotal => prevTotal - product.precio * product.cantidad);
        setCountProducts(prevCount => prevCount - product.cantidad);
        setAllProducts(results);
    };

    const onClearCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <header>
            <h1 className="header__title">Relatos de Papel</h1>

            <div className="cart__container-icon">
                <div className="cart__container-cart-icon" onClick={() => setActive(!active)}>
                    <svg width="50px" height="50px" viewBox="3 0 26 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>Shopping-cart</title>
                        <g id="🖥-Landing" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Artboard" transform="translate(-74.000000, -239.000000)">
                                <g id="Shopping-cart" transform="translate(74.000000, 239.000000)">
                                    <rect id="Rectangle" x="0" y="0" width="24" height="24">

                                    </rect>
                                    <path d="M2.5,3.5 L4.57364,3.5 C4.81929,3.5 5.02855,3.67844 5.06736,3.921 L6.73058,14.3158 C6.88582,15.286 7.72287,15.9998 8.70546,15.9998 L17.3957,15.9998 C18.3331,15.9998 19.1447,15.3487 19.3481,14.4337 L20.7296,8.21674 C20.8684,7.59222 20.3932,6.9998 19.7534,6.9998 L5.83997,6.9998" id="Path" stroke="#fff" strokeWidth="2" strokeLinecap="round">

                                    </path>
                                    <circle id="Oval" stroke="#fff" strokeWidth="2" strokeLinecap="round" cx="9.5" cy="21" r="1">

                                    </circle>
                                    <circle id="Oval" stroke="#fff" strokeWidth="2" strokeLinecap="round" cx="16.5" cy="21" r="1">

                                    </circle>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="cart__count-books">
                        <span id="contador-productos">{countProducts}</span>
                    </div>
                </div>

                <div className={`cart__container-books ${active ? '' : 'cart__hidden'}`}>
                    {allProducts.length ? (
                        <>
                            <div className="row-product">
                                {allProducts.map((product) => (
                                    <div className="cart__item-book" key={product.id}>
                                        <div className="cart__info-book">
                                            <span className="cart__book-quantity ">{product.cantidad}</span>
                                            <p className="cart__book-name">{product.nombreLibro}</p>
                                            <span className="cart__book-price ">${product.precio}</span>
                                        </div>
                                        {/* Botón para eliminar producto */}
                                        <button className="cart__delete_button" onClick={() => onDeleteProduct(product)}>
                                            X
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="cart__total">
                                <h3>Total:</h3>
                                <h3>${total}</h3>
                            </div>

                            <button className='cart__clear-button' onClick={onClearCart}>
                                Vaciar carrito
                            </button>

                            <Link to="/carrito">
                                <button className="cart__go-cart-button">
                                    Ir a Checkout
                                </button>
                            </Link>
                        </>
                    ) : (
                        <p className="cart__empty">Carrito vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};
