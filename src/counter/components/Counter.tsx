'use client'

import { useState } from 'react'

interface Props {
  initialCount?: number
}

export const Counter = ({ initialCount = 10 }: Readonly<Props>) => {
  const [count, setCount] = useState(initialCount)

  return (
    <>
      <p className="text-9xl">{count}</p>
      <p className="space-x-2">
        <button
          className="w-25 rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
        <button
          className="w-25 rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
      </p>
    </>
  )
}
