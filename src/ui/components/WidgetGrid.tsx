'use client'

import { IoCalculator } from 'react-icons/io5'

import { Path } from '@/shared/enums/Path'
import { useAppSelector } from '@/store'

import { SimpleWidget } from './SimpleWidget'

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.value)
  return (
    <div className="flex flex-wrap items-start justify-start gap-4">
      <SimpleWidget
        title={count.toString()}
        subTitle="Value from store"
        label="Counter"
        icon={<IoCalculator size={64} />}
        href={Path.Counter}
      />
    </div>
  )
}
