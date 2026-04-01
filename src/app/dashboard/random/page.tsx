import { cacheLife } from 'next/cache'

/* eslint-disable react-hooks/purity */
export default async function RandomPage() {
  'use cache'

  const cacheLifeProfile = 'seconds'
  cacheLife(cacheLifeProfile)

  const random = Math.random()
  const now = Date.now()
  const uuid = crypto.randomUUID()

  return (
    <div>
      <p>Cache Life Profile: {cacheLifeProfile}</p>
      <p>Random: {random}</p>
      <p>Now: {now}</p>
      <p>UUID: {uuid}</p>
    </div>
  )
}
