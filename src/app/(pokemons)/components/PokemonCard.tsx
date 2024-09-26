import Link from "next/link";
import React from "react";
import Image from "next/image";
/* 
import { FaHeart  } from "react-icons/fa"; */
import { CiHeart } from "react-icons/ci";

import { SimplePokemon } from "../interfaces/simple-pokemon";


interface Props {
  pokemon: SimplePokemon;
}
export const PokemonCard = ({ pokemon }: Props) => {
  const { name, id } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60 rounded-2xl">
      <div className="bg-white rounded overflow-hidden shadow-lg">

        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            alt="Pokemon"
            width={150}
            height={150}
            priority = {false}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>

          <div className="mt-5">
            <Link 
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                href={`/dashboard/pokemon/${id}`}    
            >
              Más Informacion
            </Link>
          </div>

        </div>

        <div className="border-b">
          <Link href="/dashboard/main">
            <div className="px-4 py-2 hover:bg-gray-100 flex items-center">
              <div className="text-red-600" >
                <CiHeart  style={{width:25, height:25}}/>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  No es Favorito
                </p>
                <p className="text-xs text-gray-500">Añadir a tus favoritos</p>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};
