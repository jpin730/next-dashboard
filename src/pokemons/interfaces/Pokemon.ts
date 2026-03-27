import type { PokemonApiResource } from './PokemonApiResource'

export interface Pokemon {
  id: number
  name: string
  weight: number
  moves: Move[]
  sprites: Sprites
  types: Type[]
}

export interface Move {
  move: PokemonApiResource
}

interface Sprites {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  other?: Other
}

interface Other {
  dream_world: DreamWorld
}

interface DreamWorld {
  front_default: string
}

interface Type {
  slot: number
  type: PokemonApiResource
}
