import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/pokemonDetails.css'

const PokemonDetails = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => setPokemon(res.data));
    }, [id]);

    return (
        <div className='pokemon-details'>
            <div>

                <div className='pokemon'>
                    <img src={pokemon.sprites?.front_default} alt="" />
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