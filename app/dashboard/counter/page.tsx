import type { Metadata } from 'next'

import { CartCounter } from '@/app/shopping-cart/CartCounter'

export const metadata: Metadata = {
  title: 'Shopping Cart Counter',
  description: 'A simple counter',
}

export default function CounterPage() {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <p>Products in cart</p>
      <CartCounter initialCount={20} />
    </div>
  )
}
