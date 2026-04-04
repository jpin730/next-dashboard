'use client'

import dynamic from 'next/dynamic'

const PokemonGrid = dynamic(() => import('./PokemonGrid').then((mod) => mod.PokemonGrid), {
  ssr: false,
})

export { PokemonGrid }
