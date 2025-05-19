// src/components/Splash.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css"

export const Splash = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        if (counter === 0) {
            navigate("/home");
            return; // evita seguir programando el timeout
        }
        const timer = setTimeout(() => {
            setCounter(counter - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [counter, navigate]);

    const handleSkip = () => {
        navigate("/home");
    };

    return (
        <div  className="splash-container">
           <h1>Bienvenido a Relatos de Papel / </h1>
            <p className="splash__cuenta-regresiva"> Redirigiendo en {counter} segundo{counter !== 1 ? "s" : ""}... </p>
            <button onClick={handleSkip} className="splash__button">Saltar</button>
        </div>
    );
};
