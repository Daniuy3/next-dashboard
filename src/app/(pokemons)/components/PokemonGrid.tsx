import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonCard } from './PokemonCard'



interface props {
    pokemonList: SimplePokemon[]
}

export const PokemonGrid = ({pokemonList} : props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center" >
      {
        pokemonList.map(pokemon => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        }
      </div>
  )
}
