import React from 'react';
import imgPokedex from './images/pokedex.png';
import './styles/header.css';

const Header = () => {
    return (
        <header>
            <div><img src={imgPokedex} alt="" /></div>
            <div><div><div></div></div></div>
        </header>
    );
};

export default Header;