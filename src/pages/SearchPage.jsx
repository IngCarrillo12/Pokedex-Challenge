import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components/CardPokemon';
import { PokemonContext } from '../context/pokemoncontext'
export const SearchPage = () => {
  const location = useLocation()
  const {globalPokemons} = useContext(PokemonContext);
  const filteredPokemons = globalPokemons.filter(pokemon =>pokemon.name.includes(location.state.toLowerCase()))
  return (
  <>
    <div className="container">
      <p className='p-search'>
        Se encontraron <span> {filteredPokemons.length}</span>{' '}
        resultados:
      </p>
      <div className="card-list-pokemon">
  {
    filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)
  }
    </div>
  </div>
  </>
  )
}