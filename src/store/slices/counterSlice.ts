import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  value: number
  isReady: boolean
}

const initialState: CounterState = { value: 0, isReady: false }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    init(state, action: PayloadAction<number>) {
      if (state.isReady) return

      state.value = action.payload
      state.isReady = true
    },
    increment(state) {
      state.value++
    },
    decrement(state) {
      if (state.value > 0) state.value--
    },
  },
})

export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer
