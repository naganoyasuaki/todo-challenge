import { Typography } from '@mui/material'

import theme from '@/theme'

type TodoDueDateProps = {
  dueDate: string
  completed: boolean
}

const TodoDueDate = ({ dueDate, completed }: TodoDueDateProps) => {
  if (completed) {
    return (
      <Typography variant="subtitle2" color={'#aaa'}>
        {dueDate}
      </Typography>
    )
  } else {
    return (
      <Typography variant="subtitle2" color={theme.palette.warning.main}>
        {dueDate}
      </Typography>
    )
  }
}

export default TodoDueDate
