import React, { useContext } from 'react';
import { CartContext } from '../Context/Context.jsx';
import { data } from '../data';
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
    const { allProducts, onAddProduct, countProducts, total } = useContext(CartContext);

    return (
        <div className="books">
            <div className='books__list'>
                {data.map(product => (
                    <div className='books__item' key={product.id}>
                        <figure>
                            <img src={`/book-images/${product.img}`} alt={product.nombreLibro} />
                        </figure>
                        <div className='books__item-info'>
                            <Link to={`/libro/${product.id}`}>
                                <h2>{product.nombreLibro}</h2>
                            </Link>
                            <p>{product.autor}</p>
                            <p className='books__item-price'>${product.precio}</p>
                            <button onClick={() => onAddProduct(product)}>Agregar al carrito</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
