export type Todo = {
  id: number
  title: string
  description: string
  dueDate: string
  completed: boolean
}

export type TodoState = {
  todos: Todo[]
  editId: number | null
  error?: unknown
}
