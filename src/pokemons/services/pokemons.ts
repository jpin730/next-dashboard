import type { Pokemon } from '../interfaces/Pokemon'
import type { PokemonApiResource } from '../interfaces/PokemonApiResource'
import type { PokemonApiResponse } from '../interfaces/PokemonApiResponse'
import type { SimplePokemon } from '../interfaces/SimplePokemon'

import { notFound } from 'next/navigation'

import { HTTP_STATUS } from '@/shared/consts/HttpStatus'

const BASE_URL = 'https://pokeapi.co/api/v2'

const LIMIT = 151

export const fetchWrapper = async (url: string): Promise<Response> => {
  const response = await fetch(url)

  if (response.ok) {
    return response
  }

  if (response.status === HTTP_STATUS.NOT_FOUND) {
    notFound()
  }

  throw new Error(`Error fetching data from ${url}: ${response.status} ${response.statusText}`)
}

export const getPokemons = async (limit = LIMIT, offset = 0): Promise<SimplePokemon[]> => {
  const response = await fetchWrapper(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
  const data: PokemonApiResponse<PokemonApiResource[]> = await response.json()
  return data.results.map(({ name, url }) => ({
    name,
    id: url.split('/').at(-2) ?? '',
  }))
}

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  const response = await fetchWrapper(`${BASE_URL}/pokemon/${id}`)
  return response.json()
}
