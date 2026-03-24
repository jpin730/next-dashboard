import type { Path } from '@/enums/Path'

export interface SidebarMenuItem {
  path: Path
  icon: React.ReactNode
  title: string
  subtitle: string
}
