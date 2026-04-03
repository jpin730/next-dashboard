import type { Metadata } from 'next'

import { FavoritePokemons } from '@/pokemons/components/FavoritePokemons'

export const metadata: Metadata = {
  title: 'Favorites',
  description: 'Your favorite pokemons',
}

export default async function PokemonsPage() {
  return (
    <main>
      <h1 className="mb-4 text-2xl font-bold">Favorite Pokemons</h1>

      <FavoritePokemons />
    </main>
  )
}
