import React from 'react';
import "./SearchBar.css";

export const SearchBar = () => {


    return (
        <div className="SearchBar__container">
            <div className="SearchBar__icon">
                <input type="text" className="SearchBar__input" placeholder="Buscar..."/>
                <button type="submit" className="SearchBar__icon_button">
                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M27 24.57l-5.647-5.648a8.895 8.895 0 0 0 1.522-4.984C22.875 9.01 18.867 5 13.938 5 9.01 5 5 9.01 5 13.938c0 4.929 4.01 8.938 8.938 8.938a8.887 8.887 0 0 0 4.984-1.522L24.568 27 27 24.57zm-13.062-4.445a6.194 6.194 0 0 1-6.188-6.188 6.195 6.195 0 0 1 6.188-6.188 6.195 6.195 0 0 1 6.188 6.188 6.195 6.195 0 0 1-6.188 6.188z"/></svg>
                </button>
            </div>
        </div>
    )

};
