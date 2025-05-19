// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/Context.jsx";
import { Splash } from "./components/Splash";
import { Home } from "./components/Home.jsx";
import { CarritoCompra } from "./components/carrito-de-compra";
import { BookDetail } from "./components/BookDetail";
import { Layout } from "./components/Layout";

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Splash />} />
                    <Route element={<Layout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/carrito" element={<CarritoCompra />} />
                        <Route path="/libro/:id" element={<BookDetail />} />
                    </Route>
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
