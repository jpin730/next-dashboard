import type { Metadata } from 'next'

import { SimpleWidget } from '@/ui/components/SimpleWidget'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'The main dashboard page',
}

export default function MainPage() {
  return (
    <main>
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>

      <div className="flex flex-wrap items-start justify-start">
        <SimpleWidget />
      </div>
    </main>
  )
}
