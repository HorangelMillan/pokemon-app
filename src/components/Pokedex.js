import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import imgPokedex from './images/pokedex.png';
import './styles/pokedex.css';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    const [valueInput, setValueInput] = useState('');

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
            .then(res => setPokemons(res.data?.results))
    }, []);

    /* const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
            .then(res => setPokemons(res.data?.results))
    } */

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valueInput}`)
            .then(res => {
                res.data.url = `https://pokeapi.co/api/v2/pokemon/${valueInput}`;
                setPokemons([res.data])
            });
    };

    const userName = useSelector(state => state.userName);

    console.log(pokemons)

    return (
        <div className='pokedex'>
            <header>
                <div><img src={imgPokedex} alt="" /></div>
                <div><div><div></div></div></div>
            </header>

            <p>Welcoleme <span><b>{userName}</b></span>, can find your favorite pokemons here</p>

            <div>
                <div>
                    <input type="text" placeholder='Search a pokemon...' onChange={e => setValueInput(e.target.value)} />
                    <button onClick={getPokemon}>Search</button>
                </div>
                <select name="typePokemon" id="typePokemon">
                    <option>All pokemons</option>
                </select>
            </div>

            <ul>
                {
                    pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon?.url} pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon?.url} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokedex;