import { SimplePokemon } from '@/app/(pokemons)';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface PokemonsState {
    [key:string] : SimplePokemon
}

const getInitialState = () => {
    
    if( typeof localStorage === "undefined") return {}

    const favorites = JSON.parse(localStorage.getItem("favorites") ?? "{}")
    return favorites 
}
const initialState : PokemonsState = {
    ...getInitialState()
}

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action : PayloadAction<SimplePokemon>) {
        const {id} = action.payload
        if(!!state[id]){
            delete state[id]
        } else{
            state[id] = action.payload
        } 
     
    }
}
});

export const {
    toggleFavorite
} = pokemonsSlice.actions

export default pokemonsSlice.reducer