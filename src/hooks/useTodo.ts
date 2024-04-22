'use client'

import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/hooks'
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  setEditId,
  todoSelector,
} from '@/store/modules/todo'

import type { Todo } from '@/types'

const useTodo = () => {
  const { todos, editId } = useSelector(todoSelector)
  const dispatch = useAppDispatch()

  const onFetchTodos = () => {
    dispatch(fetchTodos())
  }

  const onAddTodo = (todo: Todo) => {
    dispatch(addTodo(todo))
  }

  const onUpdateTodo = (todo: Todo) => {
    dispatch(updateTodo(todo))
  }

  const onDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }

  const onCompleteTodo = (id: number) => {
    dispatch(completeTodo(id))
  }

  const onSetEditId = (id: number | null) => {
    dispatch(setEditId(id))
  }

  return {
    onFetchTodos,
    onAddTodo,
    onUpdateTodo,
    onDeleteTodo,
    onCompleteTodo,
    onSetEditId,
    todos,
    editId,
  }
}

export default useTodo
