'use client'

import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import { counterActions } from '@/store/slices/counterSlice'

interface Props {
  initialCount?: number
}

export const Counter = ({ initialCount = 10 }: Readonly<Props>) => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  useEffect(
    function initCounter() {
      dispatch(counterActions.init(initialCount))
    },
    [dispatch, initialCount],
  )

  return (
    <>
      <p className="text-9xl">{count}</p>
      <p className="space-x-2">
        <button
          className="w-25 rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
          onClick={() => dispatch(counterActions.decrement())}
        >
          -1
        </button>
        <button
          className="w-25 rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600"
          onClick={() => dispatch(counterActions.increment())}
        >
          +1
        </button>
      </p>
    </>
  )
}
