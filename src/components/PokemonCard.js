import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/pokemonCard.css';
import Backgrounds from '../hooks/Backgrounds';


const PokemonCard = ({ pokemonUrl }) => {

    const [name, setName] = useState('');
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [typesPokemon, setTypesPokemon] = useState('');
    const [attack, setAttack] = useState({});
    const [defense, setDefense] = useState({});
    const [speed, setSpeed] = useState({});
    const [hp, setHp] = useState({});
    const [imgIsLoad, setImgIsLoad] = useState(false);

    const { background, color, backgroundSelect } = Backgrounds();

    useEffect(() => {
        if (pokemonUrl) {
            axios.get(pokemonUrl).then(res => {
                setName(res.data?.name.charAt(0).toUpperCase() + res.data?.name.slice(1));

                setPokemonInfo(res.data);
                setTypesPokemon(res.data.types);
                setAttack(res.data.stats[0]);
                setDefense(res.data.stats[1]);
                setSpeed(res.data.stats[2]);
                setHp(res.data.stats[5]);
                backgroundSelect(res);
            });
        }

    }, [pokemonUrl, backgroundSelect]);

    const navigate = useNavigate();

    return (
        <li style={{ background: background }} className={`pokemon-card ${!imgIsLoad && 'hiddenImg'}`} onClick={() => navigate(`/pokedex/${pokemonInfo.id}`)}>
            <div>
                <div style={{ background: background }} ><img onLoad={() => setImgIsLoad(true)} src={pokemonInfo.sprites?.other['official-artwork']?.front_default} alt="" /></div>
                <div>
                    <div>
                        <h4 style={{ color: color }}>{name}</h4>
                        <p> {typesPokemon[0]?.type?.name} {typesPokemon[1] && `/ ${typesPokemon[1]?.type?.name}`}</p>
                    </div>
                    <div>
                        <ul>
                            <li>{hp.stat?.name}<p>{hp.base_stat}</p></li>
                            <li>{defense.stat?.name}<p>{defense.base_stat}</p></li>
                            <li>{speed.stat?.name}<p>{speed.base_stat}</p></li>
                            <li>{attack.stat?.name}<p>{attack.base_stat}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PokemonCard;