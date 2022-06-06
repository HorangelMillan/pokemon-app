import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Backgrounds from '../hooks/Backgrounds';
import Header from './Header';
import './styles/pokemonDetails.css'

const PokemonDetails = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});
    const { background, color, backgroundSelect } = Backgrounds();

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
                    <div>
                        <h2># {pokemon.id}</h2>

                        <div>
                            <div></div>
                            <h1 style={{ color: color }}>{pokemon.name && pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</h1>
                            <div></div>
                        </div>
                    </div>
                </div>

                <div className='features'>
                    <div>
                        <p>height</p>
                        <p><b>{pokemon.height}</b></p>
                    </div>
                    <div>
                        <p>weight</p>
                        <p><b>{pokemon.weight}</b></p>
                    </div>
                </div>

                <div className='type/skills'>
                    <div className='type'>
                        <div></div>
                        {

                        }
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