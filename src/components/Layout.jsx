// src/components/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header.jsx";
import { HeaderCarrito } from "./HeaderCarrito";
import { SearchBar } from "./SearchBar.jsx";  // Importamos el SearchBar
import { Footer } from "./footer";

export const Layout = () => {
    const location = useLocation();

    // Si la ruta es "/carrito" se usa el HeaderCarrito, de lo contrario, el Header normal.
    const headerComponent = location.pathname === "/carrito" ? <HeaderCarrito /> : <Header />;

    return (
        <>
            {headerComponent}
            {/* SearchBar justo debajo del header */}
            <SearchBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
