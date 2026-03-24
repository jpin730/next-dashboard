import { redirect } from 'next/navigation'

import { Path } from '@/enums/Path'

export default function HomePage() {
  redirect(Path.Main)
}
