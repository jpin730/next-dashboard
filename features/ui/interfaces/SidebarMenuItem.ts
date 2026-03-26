import type { Path } from '@/features/shared/enums/Path'

export interface SidebarMenuItem {
  path: Path
  icon: React.ReactNode
  title: string
  subtitle: string
}
