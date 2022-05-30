import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/userName.slice';
import imgPokedex from './images/pokedex.png';
import './styles/pokemonInput.css';


const PokedexInput = () => {

    const [userName, setUserName] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUserName = () => {
        console.log(userName);
        dispatch(changeName(userName));
        navigate('/pokedex');
    };

    return (
        <div className='pokemon-input'>
            <img src={imgPokedex} alt="" />
            <div>
                <h1>¡Hello Trainne!</h1>
                <p><b>To get started, give me your name</b></p>
            </div>
            <div>
                <input type="text" placeholder='Your Name...' onChange={e => setUserName(e.target.value)} />
                <button onClick={getUserName}>Start</button>
            </div>
            <footer>
                <div><div></div></div>
                <div></div>
            </footer>
        </div>
    );
};

export default PokedexInput;