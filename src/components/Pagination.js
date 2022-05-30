import React from 'react';
import './styles/pagination.css';

const Pagination = ({ pokemonsPerPage, totalPokemons, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='pageItem'>
                            <div className='pageButton' onClick={() => paginate(number)}>
                                <h1>{number}</h1>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;