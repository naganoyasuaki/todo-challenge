'use client'

import { useDispatch, useSelector, useStore } from 'react-redux'

import useNavigation from './useNavigation'
import useTodo from './useTodo'

import type { RootState, AppDispatch, AppStore } from '@/store'
import type { TypedUseSelectorHook } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppStore: () => AppStore = useStore

export { useAppDispatch, useAppSelector, useAppStore, useNavigation, useTodo }
