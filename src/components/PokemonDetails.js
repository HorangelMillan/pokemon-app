import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Backgrounds from '../hooks/Backgrounds';
import Header from './Header';
import './styles/pokemonDetails.css'

const PokemonDetails = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});
    const { background, backgroundSelect } = Backgrounds();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => {
            setPokemon(res.data);
            backgroundSelect(res);
        });
    }, [id, backgroundSelect]);

    return (
        <div className='pokemon-details'>

            <Header />

            <div>

                <div className='pokemon'>
                    <div style={{ background: background }}>
                        <img src={pokemon.sprites?.other['official-artwork']?.front_default} alt="" />
                    </div>
                    <h2># {pokemon.id}</h2>
                    <h1>{pokemon.name}</h1>
                </div>

                <div className='features'>
                    <div>
                        <p>height</p>
                        <p>{pokemon.height}</p>
                    </div>
                    <div>
                        <p>weight</p>
                        <p>{pokemon.weight}</p>
                    </div>
                </div>

                <div className='type/skills'>
                    <div className='type'>

                    </div>
                    <div className='skills'>

                    </div>
                </div>

                <div className='stats'>

                </div>
            </div>

        </div>
    );
};

export default PokemonDetails;