import type { Metadata } from 'next'

import { PokemonGrid } from '@/pokemons/components/PokemonGrid'
import { getPokemons } from '@/pokemons/services/pokemons'

export const metadata: Metadata = {
  title: 'Pokemons',
  description: 'A list of Pokemons',
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons()

  return (
    <main>
      <h1 className="mb-4 text-2xl font-bold">Pokemons</h1>
      <PokemonGrid pokemons={pokemons} />
    </main>
  )
}
