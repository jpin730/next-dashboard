'use client'

import { useEffect, useState } from 'react'
import { shallowEqual } from 'react-redux'

import { useAppSelector } from '@/store'

import { PokemonGrid } from './PokemonGrid'

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(
    (state) => Object.values(state.pokemons.favoritesMap),
    shallowEqual,
  )
  // useState's initial value is set once, so we need to update on re-mount the component
  const [pokemons, setPokemons] = useState(favoritePokemons)

  useEffect(() => {
    // Because of hydration, we need to set the pokemons in a useEffect
    setPokemons(favoritePokemons)
  }, [favoritePokemons])

  return <PokemonGrid pokemons={pokemons} />
}
