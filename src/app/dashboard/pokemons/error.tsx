'use client'

import { ErrorPageSvg } from '@/ui/svgs/ErrorPageSvg'

interface Props {
  error: Error
}

export default function PokemonsErrorPage({ error }: Readonly<Props>) {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <ErrorPageSvg className="w-1/2 text-blue-600 md:w-1/3 lg:w-1/4" />

      <div className="flex flex-col items-center justify-center">
        <p className="mt-8 text-5xl font-bold tracking-wider text-gray-600 md:text-6xl lg:text-7xl">
          500
        </p>
        <p className="mt-2 text-2xl font-bold text-gray-600 md:text-3xl lg:text-4xl">
          Server Error: {error.message}
        </p>
        <p className="mt-4 text-gray-500 md:text-lg xl:text-xl">
          Whoops, something went wrong on our servers.
        </p>
      </div>
    </main>
  )
}
