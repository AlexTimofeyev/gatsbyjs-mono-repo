const axios = require('axios');

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        sprites: pokemon.sprites
      };
      // const abilities = await Promise.all(
      //   pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
      //     const { data: ability } = await get(`/ability/${abilityName}`);

      //     return ability;
      //   })
      // );

      // return { ...pokemon, abilities };
    })
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const pokemons = await getPokemonData(['pikachu', 'charizard', 'squirtle']);
  createPage({
    path: `/pokemons`,
    component: require.resolve('./src/templates/pokemons.js'),
    context: { pokemons }
  });
  pokemons.forEach(pokemon => {
    createPage({
      path: `/pokemons/${pokemon.name}/`,
      component: require.resolve('./src/templates/pokemon.js'),
      context: { pokemon }
    });
  });
  
};