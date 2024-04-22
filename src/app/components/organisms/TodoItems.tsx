'use client'

import { Stack } from '@mui/material'

import AddTodoForm from './AddTodoForm'
import EditTodoForm from './EditTodoForm'
import TodoItem from './TodoItem'

import type { Todo } from '@/types'

type TodoItemsProps = {
  canHaveAddForm: boolean
  filter: string
  todos: Todo[]
  editId: number | null
  onHideAddForm: () => void
  onAddTodo: (todo: Todo) => void
  onUpdateTodo: (todo: Todo) => void
  onDeleteTodo: (id: number) => void
  onCompleteTodo: (id: number) => void
  onSetEditId: (id: number | null) => void
}

const ToDoItems = ({
  canHaveAddForm,
  filter,
  todos,
  editId,
  onHideAddForm,
  onAddTodo,
  onUpdateTodo,
  onDeleteTodo,
  onCompleteTodo,
  onSetEditId,
}: TodoItemsProps) => {
  const mapTodoItems = todos.map((todo) => {
    const todoItemProps = {
      todo: todo,
      onDeleteTodo: onDeleteTodo,
      onCompleteTodo: onCompleteTodo,
      onSetEditId: onSetEditId,
    }

    const editTodoFormProps = {
      editId: editId,
      todo: todo,
      onUpdateTodo: onUpdateTodo,
      onSetEditId: onSetEditId,
    }

    switch (filter) {
      case 'active': {
        if (!todo.completed) {
          if (editId === todo.id) {
            return <EditTodoForm key={todo.id} {...editTodoFormProps} />
          } else {
            return <TodoItem key={todo.id} {...todoItemProps} />
          }
        }
        break
      }
      case 'completed': {
        if (todo.completed) {
          if (editId === todo.id) {
            return <EditTodoForm key={todo.id} {...editTodoFormProps} />
          } else {
            return <TodoItem key={todo.id} {...todoItemProps} />
          }
        }
        break
      }
      default: {
        if (editId === todo.id) {
          return <EditTodoForm key={todo.id} {...editTodoFormProps} />
        } else {
          return <TodoItem key={todo.id} {...todoItemProps} />
        }
      }
    }
  })

  return (
    <Stack direction="column" rowGap={0.5} paddingBottom={16}>
      {mapTodoItems}
      {todos.length > 0 && canHaveAddForm && (
        <AddTodoForm onHideAddForm={onHideAddForm} onAddTodo={onAddTodo} />
      )}
      {todos.length == 0 && <AddTodoForm onHideAddForm={onHideAddForm} onAddTodo={onAddTodo} />}
    </Stack>
  )
}

export default ToDoItems
