'use client'

import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Stack, Checkbox, IconButton } from '@mui/material'

import TodoDueDate from '../molecules/TodoDueDate'
import TodoTitle from '../molecules/TodoTitle'

import type { Todo } from '@/types'

type TodoItemProps = {
  todo: Todo
  onDeleteTodo: (id: number) => void
  onCompleteTodo: (id: number) => void
  onSetEditId: (id: number | null) => void
}

const TodoItem = ({ todo, onDeleteTodo, onCompleteTodo, onSetEditId }: TodoItemProps) => {
  const handleEdit = (id: number) => {
    onSetEditId(id)
  }

  const handleDelete = (id: number) => {
    onDeleteTodo(id)
  }

  const handleComplete = (id: number) => {
    onCompleteTodo(id)
  }

  return (
    <Box
      minHeight={60}
      width="100%"
      sx={{ position: 'relative', bgcolor: '#ffffffee', p: 1, borderRadius: 1 }}
    >
      <Stack direction="row">
        <Box width={40}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon />}
            checkedIcon={<CheckBoxIcon />}
            checked={todo.completed}
            onChange={() => {
              handleComplete(todo.id)
            }}
          />
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ ml: 1, mr: 1 }}
        >
          <Stack direction="column" rowGap={0}>
            <TodoTitle title={todo.title} completed={todo.completed} />
            {todo.description && <TodoTitle title={todo.description} completed={todo.completed} />}
          </Stack>
        </Box>
        <Box width={100} display="flex" justifyContent="flex-start" alignItems="center">
          <TodoDueDate dueDate={todo.dueDate} completed={todo.completed} />
        </Box>
        <Box width={80} display="flex" justifyContent={'flex-end'}>
          <IconButton
            aria-label="edit"
            onClick={() => {
              handleEdit(todo.id)
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => {
              handleDelete(todo.id)
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  )
}

export default TodoItem
