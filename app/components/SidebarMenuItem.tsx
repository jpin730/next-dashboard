'use client'

import type { SidebarMenuItem as MenuItem } from '@/interfaces/SidebarMenuItem'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const SidebarMenuItem = ({ title, subtitle, icon, path }: Readonly<MenuItem>) => {
  const pathName = usePathname()
  const isActive = pathName === path
  const activeClass = isActive ? 'bg-blue-800' : ''

  return (
    <Link
      href={path}
      className={`inline-flex w-full items-center space-x-2 border-b border-slate-700 px-2 py-3 transition duration-150 ease-linear hover:bg-white/5 ${activeClass}`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg leading-5 font-bold text-white">{title}</span>
        <span className="hidden text-sm text-white/50 md:block">{subtitle}</span>
      </div>
    </Link>
  )
}
