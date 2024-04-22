'use client'

import { combineReducers } from '@reduxjs/toolkit'

import navigation from './navigation'
import todo from './todo'

export default combineReducers({
  navigation,
  todo,
})
