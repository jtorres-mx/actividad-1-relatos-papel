import React from "react";
import { Link } from "react-router-dom";
import "./HeaderCarrito.css";

export const HeaderCarrito = () => {
    return (
        <header>
            <h1 className="header__title">Relatos de Papel</h1>
            <nav className="header__nav">
                <Link to="/home">Volver a la tienda</Link>
            </nav>
        </header>
    );
};
