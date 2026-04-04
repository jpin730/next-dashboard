'use client'

import type { SimplePokemon } from '../interfaces/SimplePokemon'

import { useEffect, useState } from 'react'

import { useAppSelector } from '@/store'

import { PokemonGrid } from './PokemonGrid'

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons.favoritesMap))

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
