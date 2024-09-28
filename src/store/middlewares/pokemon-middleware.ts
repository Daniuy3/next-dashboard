import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";


export const pokemonMiddleware = (state : MiddlewareAPI) => {

    return (next : Dispatch) => (action : Action ) => {
        /* Se despacha el action */
        next(action)

        /* Si el accion es para guardar favoritos, usamos local storage para guardar la lista de favoritos provenientes del state de redux */
        if(action.type === "pokemons/toggleFavorite"){
            localStorage.setItem("favorites", JSON.stringify(state.getState().pokemons))
        }
    }
}