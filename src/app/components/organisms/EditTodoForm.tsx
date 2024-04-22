'use client'

import { Box, Stack, TextField, Button } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { format, parse } from 'date-fns'
import { ja } from 'date-fns/locale/ja'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import type { Todo } from '@/types'

type Inputs = {
  title: string
  description: string
  dueDate: Date
}

type EditTodoFormProps = {
  editId: number | null
  todo: Todo
  onUpdateTodo: (todo: Todo) => void
  onSetEditId: (id: number | null) => void
}

const validationRules = {
  title: {
    required: 'Title is required',
  },
}

const EditTodoForm = ({ editId, todo, onUpdateTodo, onSetEditId }: EditTodoFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (editId !== null) {
      onUpdateTodo({
        id: editId,
        title: data.title,
        description: data.description,
        dueDate: format(data.dueDate, 'yyyy/MM/dd'),
        completed: false,
      })
      onSetEditId(null)
    }
  }

  const handleCancel = () => {
    onSetEditId(null)
  }

  return (
    <Box
      minHeight={60}
      width="100%"
      sx={{
        position: 'relative',
        bgcolor: '#ffffff',
        p: 3,
        pt: 4,
        mt: 0.2,
        borderRadius: 1,
        border: 1,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" rowGap={2}>
          <Controller
            name="title"
            control={control}
            rules={validationRules.title}
            defaultValue={todo.title}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Todo"
                size="small"
                error={errors.title !== undefined}
                helperText={errors.title?.message}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue={todo.description}
            render={({ field }) => (
              <TextField {...field} type="text" label="Description" size="small" />
            )}
          />

          <Controller
            name="dueDate"
            control={control}
            defaultValue={parse(todo.dueDate, 'yyyy/MM/dd', new Date())}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
                <DatePicker
                  {...field}
                  label="Due Date"
                  format="yyyy/MM/dd"
                  defaultValue={new Date()}
                />
              </LocalizationProvider>
            )}
          />
          <Box display="flex" justifyContent="flex-end" columnGap={1}>
            <Button variant="outlined" color="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  )
}

export default EditTodoForm
