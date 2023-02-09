import { configureStore } from '@reduxjs/toolkit'
import TimerSlice from './TimerSlice'

const store = configureStore({
  reducer: {
    timer:TimerSlice
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store