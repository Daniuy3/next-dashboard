import {PokemonGrid} from "@/app/(pokemons)"
export const metadata = {
  title: "Favorites",
  description: "Favorites page",
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col p-2">
      <p className="text-3xl font-bold my-2">
        Listado de Pokemones Favoritos <span className="text-indigo-500">Global State</span>
      </p>
      <PokemonGrid pokemonList={[]} />
    </div>
  );
}