import type { PayloadAction } from '@reduxjs/toolkit'

import type { SimplePokemon } from '@/pokemons/interfaces/SimplePokemon'

import { createSlice } from '@reduxjs/toolkit'

interface PokemonsState {
  favoritesMap: Record<string, SimplePokemon>
}

const initialState: PokemonsState = {
  favoritesMap: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const foundPokemon = state.favoritesMap[pokemon.id]
      if (foundPokemon) {
        delete state.favoritesMap[pokemon.id]
        return
      }
      state.favoritesMap[pokemon.id] = pokemon
    },
  },
})

export const pokemonsActions = pokemonsSlice.actions
export const pokemonsReducer = pokemonsSlice.reducer
