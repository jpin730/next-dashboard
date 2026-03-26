import { Sidebar } from '@/features/ui/components/Sidebar'

interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Readonly<Props>) {
  return (
    <div className="h-screen w-screen overflow-y-scroll bg-slate-100 text-slate-300 antialiased selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="w-full p-4 text-slate-900">{children}</div>
      </div>
    </div>
  )
}
