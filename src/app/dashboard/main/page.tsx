import type { Metadata } from 'next'

import { WidgetGrid } from '@/ui/components/WidgetGrid'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'The main dashboard page',
}

export default function MainPage() {
  return (
    <main>
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>

      <WidgetGrid />
    </main>
  )
}
