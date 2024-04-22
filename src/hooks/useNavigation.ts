'use client'

import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/hooks'
import {
  hideAddButton,
  showAddButton,
  setFilter,
  navigationSelector,
} from '@/store/modules/navigation'

const useNavigation = () => {
  const { canHaveAddButton, filter } = useSelector(navigationSelector)
  const dispatch = useAppDispatch()

  const onHideAddButton = () => {
    dispatch(hideAddButton())
  }

  const onShowAddButton = () => {
    dispatch(showAddButton())
  }

  const onSetFilter = (filter: string) => {
    dispatch(setFilter(filter))
  }

  return { canHaveAddButton, filter, onHideAddButton, onShowAddButton, onSetFilter }
}

export default useNavigation
