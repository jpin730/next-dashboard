import type { ApiResponseBody } from '@/shared/interfaces/ApiResponse'

export const getCounterValue = async () => {
  const data: ApiResponseBody<number> = await fetch('/api/counter').then((res) => res.json())
  return data
}
