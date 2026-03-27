import type { PokemonApiResource } from '../interfaces/PokemonApiResource'
import type { PokemonApiResponse } from '../interfaces/PokemonApiResponse'
import type { SimplePokemon } from '../interfaces/SimplePokemon'

const POKEMON_API_URL = 'https://pokeapi.co/api/v2'

const POKEMON_LIMIT = 151

export const getPokemons = async (limit = POKEMON_LIMIT, offset = 0): Promise<SimplePokemon[]> => {
  const response = await fetch(`${POKEMON_API_URL}/pokemon?limit=${limit}&offset=${offset}`)
  const data: PokemonApiResponse<PokemonApiResource[]> = await response.json()
  return data.results.map(({ name, url }) => ({
    name,
    id: url.split('/').at(-2) ?? '',
  }))
}
