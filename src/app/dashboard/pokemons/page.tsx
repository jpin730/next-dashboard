import type { Metadata } from 'next'

import { cacheLife } from 'next/cache'

import { PokemonGrid } from '@/pokemons/components/PokemonGridWrapper'
import { getPokemons } from '@/pokemons/services/pokemons'

export const metadata: Metadata = {
  title: 'Pokemons',
  description: 'A list of Pokemons',
}

export default async function PokemonsPage() {
  'use cache'

  cacheLife('minutes')

  const pokemons = await getPokemons()

  return (
    <main>
      <h1 className="mb-4 text-2xl font-bold">Pokemons</h1>
      <PokemonGrid pokemons={pokemons} />
    </main>
  )
}
