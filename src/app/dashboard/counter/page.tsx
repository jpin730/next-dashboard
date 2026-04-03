import type { Metadata } from 'next'

import { Counter } from '@/counter/components/Counter'

export const metadata: Metadata = {
  title: 'Counter',
  description: 'A simple counter',
}

export default function CounterPage() {
  return (
    <main className="flex size-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Counter</h1>
      <Counter />
    </main>
  )
}
