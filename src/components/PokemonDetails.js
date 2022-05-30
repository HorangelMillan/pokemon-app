import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => setPokemon(res.data));
    }, [id]);

    return (
        <div>
            <div>
                <p>weigth</p>
                <p>{pokemon.weight}</p>
            </div>
            <div>
                <img src={pokemon.sprites?.front_default} alt="" />
                <h1>{pokemon.name}</h1>
                <h2># {pokemon.id}</h2>
            </div>
            <div>
                <p>heigth</p>
                <p>{pokemon.heigth}</p>
            </div>

        </div>
    );
};

export default PokemonDetails;