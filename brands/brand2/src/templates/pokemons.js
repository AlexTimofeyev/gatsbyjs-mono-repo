import React from 'react';
import { Link } from 'gatsby';
import { menuItems } from '../data'
import { Menu } from '@mono-rep/shared-ui'


const PokemonsPage = ({ pageContext: { pokemons } }) => (
  <>
  <Menu items={menuItems} current="/pokemons" />
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Choose a Pokémon!</h1>
    <ul style={{ padding: 0 }}>
      {pokemons.map(pokemon => (
        <li
          key={pokemon.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
          }}
        >
          <Link to={`/pokemons/${pokemon.name}`}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  </>
);
  
  export default PokemonsPage