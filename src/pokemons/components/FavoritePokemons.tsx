'use client'

import type { SimplePokemon } from '../interfaces/SimplePokemon'

import { useEffect, useState } from 'react'

import { useAppSelector } from '@/store'
import { favoritePokemonsSelector } from '@/store/selectors/pokemons'

import { PokemonGrid } from './PokemonGridWrapper'

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(favoritePokemonsSelector)

  const [isMounted, setIsMounted] = useState(false)
  const [initialPokemons, setInitialPokemon] = useState<SimplePokemon[]>([])

  useEffect(function resetIsMounted() {
    return () => {
      setIsMounted(false)
    }
  }, [])

  if (!isMounted) {
    setInitialPokemon(favoritePokemons)
    setIsMounted(true)
  }

  return <PokemonGrid pokemons={initialPokemons} />
}
