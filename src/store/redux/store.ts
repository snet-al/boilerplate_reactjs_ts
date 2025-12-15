import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './slices/auth'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: !((import.meta as any).env?.PROD ?? false),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

