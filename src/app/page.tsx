'use client'

import AddIcon from '@mui/icons-material/Add'
import { Container, Stack, Box, Fab } from '@mui/material'

import Header from '@/app/components/organisms/Header'
import { useNavigation, useTodo } from '@/hooks'

import ToDoItems from './components/organisms/TodoItems'

const Home = () => {
  const { canHaveAddButton, filter, onHideAddButton, onShowAddButton, onSetFilter } =
    useNavigation()
  const { todos, editId, onAddTodo, onUpdateTodo, onDeleteTodo, onCompleteTodo, onSetEditId } =
    useTodo()

  const handleAddButtonClick = () => {
    onHideAddButton()
  }

  const handleHideAddForm = () => {
    onShowAddButton()
  }

  return (
    <>
      <Container maxWidth="md">
        <Stack direction="column" width="100%" rowGap={0.5}>
          <Header onSetFilter={onSetFilter} />
          <ToDoItems
            canHaveAddForm={!canHaveAddButton}
            filter={filter}
            todos={todos}
            editId={editId}
            onHideAddForm={handleHideAddForm}
            onAddTodo={onAddTodo}
            onUpdateTodo={onUpdateTodo}
            onDeleteTodo={onDeleteTodo}
            onCompleteTodo={onCompleteTodo}
            onSetEditId={onSetEditId}
          />
        </Stack>
      </Container>
      {todos.length > 0 && canHaveAddButton && (
        <Box width="100%" position="fixed" display="flex" justifyContent="center" bottom={32}>
          <Fab color="primary" aria-label="add" onClick={handleAddButtonClick}>
            <AddIcon />
          </Fab>
        </Box>
      )}
    </>
  )
}

export default Home
