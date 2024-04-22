'use client'

import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store'
import type { NavigationState } from '@/types'

const initialState: NavigationState = { canHaveAddButton: true, filter: 'all' }

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    hideAddButton: (state) => {
      state.canHaveAddButton = false
    },
    showAddButton: (state) => {
      state.canHaveAddButton = true
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { hideAddButton, showAddButton, setFilter } = navigationSlice.actions
export const navigationSelector = (state: RootState) => state.navigation
export default navigationSlice.reducer
