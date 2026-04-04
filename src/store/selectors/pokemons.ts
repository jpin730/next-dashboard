import type { AppState } from '..'

import { createSelector } from '@reduxjs/toolkit'

export const favoritePokemonsSelector = createSelector(
  (state: AppState) => state.pokemons.favoritesMap,
  (favoritesMap) => Object.values(favoritesMap),
)
