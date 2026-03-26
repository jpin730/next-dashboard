import type { SidebarMenuItem as MenuItem } from '@/interfaces/SidebarMenuItem'

import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5'

import { Path } from '@/enums/Path'

import { SidebarMenuItem } from './SidebarMenuItem'

const MENU_ITEMS: MenuItem[] = [
  {
    path: Path.Main,
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualization',
  },
  {
    path: Path.Counter,
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Client Side Counter',
  },
  {
    path: Path.Pokemons,
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subtitle: 'Static Generation',
  },
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="left-0 z-10 h-screen min-h-screen w-100 overflow-y-scroll bg-gray-900 text-slate-300"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
          <IoLogoReact className="me-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-sm text-slate-500">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <span>
            <Image
              width={50}
              height={50}
              className="size-8 rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
            />
          </span>
          <span className="text-sm font-bold md:text-base">Edward Tompson</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {MENU_ITEMS.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  )
}
