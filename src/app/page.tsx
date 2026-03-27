import { redirect } from 'next/navigation'

import { Path } from '@/shared/enums/Path'

export default function HomePage() {
  redirect(Path.Main)
}
