import React, { useState, useContext } from "react";
import { CartContext } from "../context/Context";
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-cart"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
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
                                    Ir al carrito de compra
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
