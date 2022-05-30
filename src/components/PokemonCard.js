import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import backgrounds from './backgrounds/backgorunds.json';
import './styles/pokemonCard.css';


const PokemonCard = ({ pokemonUrl }) => {

    const [name, setName] = useState('');
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [background, setBackground] = useState('');
    const [typesPokemon, setTypesPokemon] = useState('');
    const [attack, setAttack] = useState({});
    const [defense, setDefense] = useState({});
    const [speed, setSpeed] = useState({});
    const [hp, setHp] = useState({});
    const [color, setColor] = useState('');

    useEffect(() => {
        axios.get(pokemonUrl).then(res => {
            setName(res.data?.name.charAt(0).toUpperCase() + res.data?.name.slice(1));

            setPokemonInfo(res.data);
            setTypesPokemon(res.data.types[0].type?.name);
            setAttack(res.data.stats[0]);
            setDefense(res.data.stats[1]);
            setSpeed(res.data.stats[2]);
            setHp(res.data.stats[5]);
            for (const property in backgrounds) {
                if (backgrounds[property].name === res.data.types[0].type?.name) {
                    setBackground(backgrounds[property].background);
                    setColor(backgrounds[property].color);
                };
            }
        });

    }, [pokemonUrl]);

    const navigate = useNavigate();

    return (
        <li style={{ background: background }} className='pokemon-card' onClick={() => navigate(`/pokedex/${pokemonInfo.id}`)}>
            <div>
                <div><img src={pokemonInfo.sprites?.other['official-artwork']?.front_default} alt="" /></div>
                <div>
                    <div>
                        <h4 style={{color: color}}>{name}</h4>
                        <p>{typesPokemon}</p>
                    </div>
                    <div>
                        <ul>
                            <li>{hp.stat?.name}<p>{attack.base_stat}</p></li>
                            <li>{defense.stat?.name}<p>{attack.base_stat}</p></li>
                            <li>{speed.stat?.name}<p>{attack.base_stat}</p></li>
                            <li>{attack.stat?.name}<p>{attack.base_stat}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PokemonCard;