'use client'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '@/store'
import type { Todo, TodoState } from '@/types'

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async (arg, thunkApi) => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // const data = await response.json()
    // console.log(data)

    const state = thunkApi.getState() as RootState
    const { todos } = state.todo
    return todos as Todo[]
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

export const addTodo = createAsyncThunk('todo/addTodo', async (todo: Todo, thunkApi) => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // const todos = await response.json()

    return todo as Todo
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

export const updateTodo = createAsyncThunk(
  'todo/updateTodo',
  async (todo: Todo, { rejectWithValue }) => {
    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      // const todos = await response.json()
      return todo as Todo
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id: number, { rejectWithValue }) => {
    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      // const todos = await response.json()
      return id
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const completeTodo = createAsyncThunk(
  'todo/completeTodo',
  async (id: number, { rejectWithValue }) => {
    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      // const todos = await response.json()
      return id
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: TodoState = {
  todos: [],
  editId: null,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setEditId(state, action) {
      state.editId = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.todos = payload
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error
      }
    })
    builder.addCase(addTodo.fulfilled, (state, { payload }) => {
      const maxId = Math.max(...state.todos.map((o) => o.id)) + 1
      if (Number.isInteger(maxId)) {
        state.todos.push({ ...payload, id: maxId })
      } else {
        const newId = 1
        state.todos.push({ ...payload, id: newId })
      }
    })
    builder.addCase(addTodo.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error
      }
    })
    builder.addCase(updateTodo.fulfilled, (state, { payload }) => {
      const foundIndex = state.todos.findIndex((item) => item.id === payload.id)
      state.todos[foundIndex] = payload
    })
    builder.addCase(updateTodo.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error
      }
    })
    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      state.todos = state.todos.filter((item) => item.id !== payload)
    })
    builder.addCase(deleteTodo.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error
      }
    })
    builder.addCase(completeTodo.fulfilled, (state, { payload }) => {
      const foundIndex = state.todos.findIndex((item) => item.id === payload)
      state.todos[foundIndex].completed = !state.todos[foundIndex].completed
    })
    builder.addCase(completeTodo.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error
      }
    })
  },
})

export const { setEditId } = todoSlice.actions
export const todoSelector = (state: RootState) => state.todo
export default todoSlice.reducer
