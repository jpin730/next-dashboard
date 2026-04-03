import type { PayloadAction } from '@reduxjs/toolkit'

import type { SimplePokemon } from '@/pokemons/interfaces/SimplePokemon'

import { createSlice } from '@reduxjs/toolkit'

type SimplePokemonMap = Record<string, SimplePokemon>

interface PokemonsState {
  favoritesMap: SimplePokemonMap
}

const initialState: PokemonsState = {
  favoritesMap: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: initialState,
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
    setFavorites(state, action: PayloadAction<SimplePokemonMap>) {
      state.favoritesMap = action.payload
    },
  },
})

export const pokemonsActions = pokemonsSlice.actions
export const pokemonsReducer = pokemonsSlice.reducer
