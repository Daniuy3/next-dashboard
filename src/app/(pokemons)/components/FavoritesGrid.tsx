"use client";

import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid'
import { useState } from 'react';

export const FavoritesGrid = () => {
    const pokemonsList = useAppSelector((state) => Object.values(state.pokemons))

    const [pokemons] = useState(pokemonsList)
  return (
    <PokemonGrid pokemonList={pokemons} />
  )
}
