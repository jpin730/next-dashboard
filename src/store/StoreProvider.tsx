'use client'

import type { AppState } from '.'

import { useEffect } from 'react'
import { Provider } from 'react-redux'

import { StorageKey } from './enums/StorageKey'
import { pokemonsActions } from './slices/pokemons'

import { store } from '.'

interface Props {
  children: React.ReactNode
}

export default function StoreProvider({ children }: Readonly<Props>) {
  useEffect(function initFavoritePokemons() {
    const stored = localStorage.getItem(StorageKey.FavoritePokemons)

    if (stored === null) return

    const pokemons = JSON.parse(stored) as AppState['pokemons']['favoritesMap']
    store.dispatch(pokemonsActions.setFavorites(pokemons))
  }, [])

  return <Provider store={store}>{children}</Provider>
}
