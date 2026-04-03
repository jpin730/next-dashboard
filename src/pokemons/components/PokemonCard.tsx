'use client'

import type { SimplePokemon } from '../interfaces/SimplePokemon'

import Image from 'next/image'
import Link from 'next/link'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

import { Path } from '@/shared/enums/Path'
import { useAppDispatch, useAppSelector } from '@/store'
import { pokemonsActions } from '@/store/slices/pokemons'

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Readonly<Props>) => {
  const dispatch = useAppDispatch()

  const isFavorite = useAppSelector((state) => !!state.pokemons.favoritesMap[pokemon.id])

  const handleToggleFavorite = () => dispatch(pokemonsActions.toggleFavorite(pokemon))

  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
  const pokemonDetailUrl = Path.PokemonWithId.replace(':idOrName', pokemon.name)

  return (
    <div className="w-full max-w-65 rounded bg-white shadow-lg">
      <div className="relative border-b bg-gray-800 p-6 text-center">
        <Image
          fill
          loading="eager"
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

      <button
        className="flex w-full items-center space-x-2 px-4 py-2 hover:bg-gray-100"
        onClick={handleToggleFavorite}
      >
        {isFavorite ? (
          <IoHeart className="text-red-500" size={24} />
        ) : (
          <IoHeartOutline className="text-red-500" size={24} />
        )}
        <div className="grow">
          <p className="text-sm leading-none font-medium text-gray-800">
            {isFavorite ? 'Favorite' : 'No favorite'}
          </p>
          <p className="text-xs text-gray-500">View your campaigns</p>
        </div>
      </button>
    </div>
  )
}
