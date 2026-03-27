import type { Pokemon } from '../interfaces/Pokemon'
import type { PokemonApiResource } from '../interfaces/PokemonApiResource'
import type { PokemonApiResponse } from '../interfaces/PokemonApiResponse'
import type { SimplePokemon } from '../interfaces/SimplePokemon'

const BASE_URL = 'https://pokeapi.co/api/v2'

const LIMIT = 151

export const getPokemons = async (limit = LIMIT, offset = 0): Promise<SimplePokemon[]> => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
  const data: PokemonApiResponse<PokemonApiResource[]> = await response.json()
  return data.results.map(({ name, url }) => ({
    name,
    id: url.split('/').at(-2) ?? '',
  }))
}

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`)
  return response.json()
}
