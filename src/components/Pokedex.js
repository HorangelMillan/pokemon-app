import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';
import './styles/pokedex.css';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    const [valueInput, setValueInput] = useState('');
    const [types, setTypes] = useState([]);

    /* pagination */

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(10);

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemon = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    /* pagination */

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => {
                setPokemons(res.data?.results);
                console.log('pokedex.js se ejecutó el useEfect')
            });
        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data?.results));
    }, []);

    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => setPokemons(res.data?.results));
    }

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valueInput}`)
            .then(res => {
                res.data.url = `https://pokeapi.co/api/v2/pokemon/${valueInput}`;
                setPokemons([res.data]);
                setCurrentPage(1);
            });
    };

    const getPokemonByType = (e) => {
        if (e.target.value !== 'all') {
            axios.get(`https://pokeapi.co/api/v2/type/${e.target.value}`)
                .then(res => {
                    setPokemons(res.data?.pokemon);
                    setCurrentPage(1);
                });
        } else {
            getPokemons();
        };
    };

    const userName = useSelector(state => state.userName);

    return (
        <div className='pokedex'>

            <Header />

            <p>Welcoleme <span><b>{userName}</b></span>, can find your favorite pokemons here</p>

            <div>
                <div>
                    <input type="text" placeholder='Search a pokemon...' onChange={e => setValueInput(e.target.value)} />
                    <button onClick={getPokemon}>Search</button>
                </div>
                <select onChange={getPokemonByType}>
                    <option value={'all'}>All pokemons</option>
                    {
                        types ? types.map(type => (
                            <option value={type.name} key={type.name}>{type.name}</option>
                        )) : null
                    }
                </select>
            </div>

            <ul>
                {
                    currentPokemon.map(pokemon => (
                        <PokemonCard key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon?.url} pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon?.url} />
                    ))
                }
            </ul>

            <Pagination currentPage={currentPage} pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemons.length} paginate={paginate} />
        </div>
    );
};

export default Pokedex;