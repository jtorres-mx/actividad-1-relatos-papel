import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    // Función para agregar producto al carrito:
    const onAddProduct = (product) => {
        const existingProduct = allProducts.find(item => item.id === product.id);
        if (existingProduct) {
            const updatedProducts = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
            setAllProducts(updatedProducts);
        } else {
            setAllProducts([...allProducts, { ...product, cantidad: 1 }]);
        }
        setTotal(prevTotal => prevTotal + product.precio);
        setCountProducts(prevCount => prevCount + 1);
    };

    // Función para eliminar un producto:
    const onDeleteProduct = (product) => {
        const updatedProducts = allProducts.filter(item => item.id !== product.id);
        setTotal(prevTotal => prevTotal - product.precio * product.cantidad);
        setCountProducts(prevCount => prevCount - product.cantidad);
        setAllProducts(updatedProducts);
    };

    // Función para vaciar el carrito:
    const onClearCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <CartContext.Provider value={{
            allProducts,
            setAllProducts,
            total,
            setTotal,
            countProducts,
            setCountProducts,
            onAddProduct,    // ¡Incluimos la función para agregar!
            onDeleteProduct, // ¡También la de eliminar!
            onClearCart      // Y la de vaciar carrito!
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
