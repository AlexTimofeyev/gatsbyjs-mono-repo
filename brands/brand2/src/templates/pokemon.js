import React from 'react';
import { Link } from 'gatsby';
import { menuItems } from '../data'
import { Menu } from '@mono-rep/shared-ui'


const PokemonPage = ({ pageContext: { pokemon } }) => (
  <>
  <Menu items={menuItems} current="/pokemons" />
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>{pokemon.name} Pokémon!</h1>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <img src={pokemon.sprites.back_default} alt={pokemon.name} />
    <ul style={{ padding: 0 }}>
        <li>ID: {pokemon.id}</li>
        <li>Height: {pokemon.height}</li>
        <li>Weight: {pokemon.weight}</li>
    </ul>
    <Link to={`/pokemons`}>Back to list</Link>
  </div>
  </>
);
  
  export default PokemonPage