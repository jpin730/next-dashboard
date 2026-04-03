import type { NextResponse } from 'next/server'

export type ApiResponse<T> = Promise<NextResponse<ApiResponseBody<T>>>

export interface ApiResponseBody<T> {
  data: T
  error?: unknown
}
