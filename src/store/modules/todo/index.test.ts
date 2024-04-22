import state from '@/store/mockState'

import reducer from './index'
import { setEditId } from './index'

const initialState = state.todo

describe('todo', () => {
  it('should handle setEditId(number)', () => {
    const expected = {
      ...initialState,
      editId: 1,
    }
    expect(reducer(initialState, setEditId(1))).toEqual(expected)
  })

  it('should handle setEditId(null)', () => {
    const expected = {
      ...initialState,
      editId: null,
    }
    expect(reducer(initialState, setEditId(null))).toEqual(expected)
  })

  it('should handle fetchTodos.fulfilled', () => {
    const action = {
      type: 'todo/fetchTodos/fulfilled',
      payload: [
        {
          id: 1,
          title: '家賃の引き落とし',
          description: '三菱UFJ銀行',
          dueDate: '2024-04-20',
          completed: true,
        },
        {
          id: 2,
          title: 'ABC病院へ行く',
          description: '',
          dueDate: '2024-05-10',
          completed: false,
        },
        {
          id: 3,
          title: '新しいプロジェクトを開始する',
          description: 'XYZ社',
          dueDate: '2024-05-20',
          completed: false,
        },
        {
          id: 4,
          title: 'プレゼンの準備',
          description: 'SSS社',
          dueDate: '2024-05-15',
          completed: false,
        },
        {
          id: 5,
          title: '帰省の準備',
          description: '新幹線、おみやげ、現金、電話',
          dueDate: '2024-05-20',
          completed: false,
        },
      ],
    }
    const expected = {
      ...initialState,
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  it('should handle fetchTodos.rejected', () => {
    const action = {
      type: 'todo/fetchTodos/rejected',
      payload: 'error',
    }
    const expected = {
      ...initialState,
      error: 'error',
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  it('should handle addTodo.fulfilled', () => {
    const action = {
      type: 'todo/addTodo/fulfilled',
      payload: {
        id: -1,
        title: 'test',
        description: 'test',
        dueDate: '2024-05-22',
        completed: false,
      },
    }
    const expected = {
      ...initialState,
      todos: [
        ...initialState.todos,
        { id: 6, title: 'test', description: 'test', dueDate: '2024-05-22', completed: false },
      ],
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  it('should handle addTodo.rejected', () => {
    const action = {
      type: 'todo/addTodo/rejected',
      payload: 'error',
    }
    const expected = {
      ...initialState,
      error: 'error',
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  it('should handle updateTodo.fulfilled', () => {
    const action = {
      type: 'todo/updateTodo/fulfilled',
      payload: {
        id: 2,
        title: 'test',
        description: '',
        dueDate: '2024-05-10',
        completed: false,
      },
    }
    const expected = {
      ...initialState,
      todos: initialState.todos.map((todo) => (todo.id === 2 ? { ...todo, title: 'test' } : todo)),
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  it('should handle updateTodo.rejected', () => {
    const action = {
      type: 'todo/updateTodo/rejected',
      payload: 'error',
    }
    const expected = {
      ...initialState,
      error: 'error',
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  it('should handle deleteTodo.fulfilled', () => {
    const action = {
      type: 'todo/deleteTodo/fulfilled',
      payload: 1,
    }
    const expected = {
      ...initialState,
      todos: initialState.todos.filter((todo) => todo.id !== 1),
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  it('should handle deleteTodo.rejected', () => {
    const action = {
      type: 'todo/deleteTodo/rejected',
      payload: 'error',
    }
    const expected = {
      ...initialState,
      error: 'error',
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  it('should handle completeTodo.fulfilled', () => {
    const action = {
      type: 'todo/completeTodo/fulfilled',
      payload: 3,
    }
    const expected = {
      ...initialState,
      todos: initialState.todos.map((todo) =>
        todo.id === 3 ? { ...todo, completed: !todo.completed } : todo
      ),
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  it('should handle completeTodo.rejected', () => {
    const action = {
      type: 'todo/completeTodo/rejected',
      payload: 'error',
    }
    const expected = {
      ...initialState,
      error: 'error',
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })
})
