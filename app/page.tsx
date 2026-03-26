import { redirect } from 'next/navigation'

import { Path } from '@/features/shared/enums/Path'

export default function HomePage() {
  redirect(Path.Main)
}
