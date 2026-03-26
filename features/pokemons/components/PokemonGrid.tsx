import type { SimplePokemon } from '../interfaces/SimplePokemon'

import { PokemonCard } from './PokemonCard'

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Readonly<Props>) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
