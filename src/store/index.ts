'use client'

import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './modules'

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
// export const store = configureStore({
//   reducer: rootReducer,
// })

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
