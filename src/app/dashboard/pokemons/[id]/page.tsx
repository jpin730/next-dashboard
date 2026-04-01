import type { Metadata } from 'next'

import type { WithParams } from '@/shared/interfaces/WithParams'

import Image from 'next/image'

import { getPokemonById, POKEMONS_LIMIT } from '@/pokemons/services/pokemons'

interface Params {
  id: string
}

type Props = WithParams<Params>

export async function generateStaticParams(): Promise<Params[]> {
  return Array.from({ length: POKEMONS_LIMIT }, (_, i) => ({ id: (i + 1).toString() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const pokemon = await getPokemonById(id)

  return {
    title: `#${pokemon.id} ${pokemon.name}`,
    description: `Details of the pokemon ${pokemon.name}`,
  }
}

export default async function PokemonPage({ params }: Readonly<Props>) {
  const { id } = await params
  const pokemon = await getPokemonById(id)

  return (
    <main className="flex h-full items-center justify-center">
      <div className="mx-auto w-full max-w-175 rounded-2xl bg-white p-4 text-slate-800 shadow-lg">
        <div className="w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="relative flex flex-col items-center justify-center">
            <Image
              fill
              loading="eager"
              src={pokemon.sprites.other?.dream_world.front_default ?? ''}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="static! mb-4 h-38! object-contain"
            />
          </div>
        </div>

        <div className="mb-4 grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
            <p className="text-sm text-gray-600">Types</p>
            <p className="text-navy-700 flex text-center text-base font-medium">
              {pokemon.types.map((type) => (
                <span key={type.slot} className="capitalize">
                  {type.type.name}&nbsp;
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
            <p className="text-sm text-gray-600">Peso</p>
            <p className="text-navy-700 flex text-center text-base font-medium">{pokemon.weight}</p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1">
          {pokemon.moves
            .toSorted((a, b) => a.move.name.localeCompare(b.move.name))
            .map((move) => (
              <p
                key={move.move.name}
                className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 capitalize"
              >
                {move.move.name}
              </p>
            ))}
        </div>
      </div>
    </main>
  )
}
