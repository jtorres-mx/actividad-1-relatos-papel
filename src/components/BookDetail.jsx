// BookDetail.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { CartContext } from "../Context/Context.jsx";
import "./BookDetail.css";

export const BookDetail = () => {  // Nota: usamos 'export const'
    const { id } = useParams();
    const book = data.find(item => item.id === parseInt(id));
    const { onAddProduct } = useContext(CartContext);

    if (!book) {
        return <p>Libro no encontrado.</p>;
    }
    console.log(book.img);
    return (
        <div className="book-detail__container">
            <img className= "book-detail__img" src={`/book-images/${book.img}`} alt={book.nombreLibro} />
            <div className="book-detail__info">
            <h2>{book.nombreLibro}</h2>
            <p><strong>Autor:</strong> {book.autor}</p>
            <p><strong>Precio:</strong> ${book.precio}</p>
            <p><strong>Descripción:</strong> {book.descripcion}</p>
            <button onClick={() => onAddProduct(book)}>Agregar al carrito</button>
            </div>
        </div>
    );
};
