import React from 'react'

import './header.css';

const Header = () => {
    return(
        <div className="header navbar-collapse d-flex flex-row justify-content-around">
            <h1>Pokemon DB</h1> 
            <ul className="navbar-nav d-flex flex-row">
                <li>Pokemons</li>
                <li>Items</li>
                <li>Locations</li>
            </ul>
        </div>
    )
};

export default Header