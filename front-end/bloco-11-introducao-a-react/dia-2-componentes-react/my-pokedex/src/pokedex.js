import React from 'react';
import Pokemon from './pokemon'
import pokemons from './data'

class Pokedex extends React.Component {
  render() {
    return (
        <div className='allPoke'>
          {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
  }
}

export default Pokedex;