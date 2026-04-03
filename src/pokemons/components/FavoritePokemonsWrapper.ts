'use client'

import dynamic from 'next/dynamic'

const FavoritePokemons = dynamic(
  () => import('./FavoritePokemons').then((mod) => mod.FavoritePokemons),
  { ssr: false },
)

export { FavoritePokemons }
