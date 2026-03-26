import { PokemonGrid } from '@/features/pokemons/components/PokemonGrid'
import { getPokemons } from '@/features/pokemons/services/pokemons'

export default async function PokemonsPage() {
  const pokemons = await getPokemons()

  return (
    <main>
      <h1 className="mb-4 text-2xl font-bold">Pokemons</h1>
      <PokemonGrid pokemons={pokemons} />
    </main>
  )
}
