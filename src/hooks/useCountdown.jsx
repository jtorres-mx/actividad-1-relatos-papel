// src/hooks/useCountdown.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCountdown = (initialCount = 5, redirectPath = "/home") => {
    const [count, setCount] = useState(initialCount);
    const navigate = useNavigate();

    useEffect(() => {
        if (count <= 0) {
            navigate(redirectPath);
            return;
        }
        const timer = setTimeout(() => {
            setCount((prev) => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count, navigate, redirectPath]);

    return count;
};
