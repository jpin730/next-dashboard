'use client'

import { usePathname } from 'next/navigation'

export const NotFoundPathname = () => {
  const pathname = usePathname()

  return (
    <div className="mb-2 text-sm text-white">
      Could not find: <code className="rounded bg-black px-2 py-1">{pathname}</code>
    </div>
  )
}
