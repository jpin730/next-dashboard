import type { Action, Middleware } from '@reduxjs/toolkit'

import type { AppState } from '..'

import { StorageKey } from '../enums/StorageKey'
import { pokemonsActions } from '../slices/pokemons'

export const localStorageMiddleware: Middleware = (api) => {
  return (dispatch) => (action) => {
    dispatch(action)

    const type = (action as Action).type

    if (type === pokemonsActions.toggleFavorite.type) {
      const { pokemons } = api.getState() as AppState
      localStorage.setItem(StorageKey.FavoritePokemons, JSON.stringify(pokemons.favoritesMap))
    }
  }
}
