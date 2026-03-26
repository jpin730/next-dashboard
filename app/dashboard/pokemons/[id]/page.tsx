import type { WithParams } from '@/features/shared/interfaces/WithParams'

interface Params {
  id: string
}

type Props = WithParams<Params>

export default async function PokemonPage({ params }: Readonly<Props>) {
  const { id } = await params
  return (
    <main>
      <h1>Pokemon Page</h1>
      <p>Pokemon ID: {id}</p>
    </main>
  )
}
