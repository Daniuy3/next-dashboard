
import { configureStore, Middleware } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"
import { useDispatch, useSelector } from 'react-redux';
import pokemonsReducer from './pokemons/pokemons';
import { pokemonMiddleware } from './middlewares/pokemon-middleware';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonMiddleware as Middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()