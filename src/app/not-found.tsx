import type { Metadata } from 'next'

import Link from 'next/link'

import { Path } from '@/shared/enums/Path'
import { NotFoundPathname } from '@/ui/components/NotFoundPathname'

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The requested resource was not found',
}

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">404</h1>
      <div className="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm">Page Not Found</div>
      <NotFoundPathname />
      <Link
        href={Path.Main}
        className="group relative inline-block text-sm font-medium text-[#FF6A3D] focus:ring focus:outline-none active:text-orange-500"
      >
        <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="relative block border border-current bg-[#1A2238] px-8 py-3">
          Go Dashboard
        </span>
      </Link>
    </main>
  )
}
