import type { SimplePokemon } from '../interfaces/SimplePokemon'

import Image from 'next/image'
import Link from 'next/link'
import { IoHeartOutline } from 'react-icons/io5'

import { Path } from '@/shared/enums/Path'

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Readonly<Props>) => {
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
  const pokemonDetailUrl = Path.PokemonWithId.replace(':id', pokemon.id)

  return (
    <div className="w-full max-w-65 rounded bg-white shadow-lg">
      <div className="relative border-b bg-gray-800 p-6 text-center">
        <Image
          fill
          className="static! h-50! object-contain"
          src={pokemonImageUrl}
          alt={pokemon.name}
        />
        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
          #{pokemon.id} {pokemon.name}
        </p>
        <div className="mt-5">
          <Link
            prefetch
            href={pokemonDetailUrl}
            className="rounded-full border px-4 py-2 text-xs font-semibold text-gray-100"
          >
            More Info
          </Link>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <Link href="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <IoHeartOutline className="size-6 text-red-600" />
          <div className="pl-3">
            <p className="text-sm leading-none font-medium text-gray-800">No favorite</p>
            <p className="text-xs text-gray-500">View your campaigns</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
