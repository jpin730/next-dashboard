import type { ApiResponse } from '@/shared/interfaces/ApiResponse'

import { NextResponse } from 'next/server'

export async function GET(): ApiResponse<number> {
  return NextResponse.json({ data: 100 })
}
