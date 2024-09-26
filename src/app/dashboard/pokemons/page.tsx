import { PokemonsResponse, SimplePokemon } from "@/app/(pokemons)";
import {PokemonGrid} from "@/app/(pokemons)"
export const metadata = {
  title: "Pokemon",
  description: "Pokemon page",
};

const getPokemons = async (limit = 200, offset = 0) :Promise<SimplePokemon[]>  => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
                    .then((response) => response.json())

  const pokemons = data.results.map(pokemon => ({
    name: pokemon.name,
    id: pokemon.url.split('/').at(-2)!, /*← not null operator se aplica directamente en la declaracion de la variable  */
  }))


  return pokemons;
}

export default async function PokemonsPage() {

  const pokemonList = await getPokemons();

  return (
    <div className="flex flex-col p-2">
      <p className="text-3xl font-bold my-2">
        Listado de Pokemones <span className="text-indigo-500">Estatico</span>
      </p>
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
}