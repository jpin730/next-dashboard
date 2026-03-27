import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'The main dashboard page',
}

export default function MainPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </main>
  )
}
