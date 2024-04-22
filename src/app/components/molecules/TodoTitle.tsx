import { Typography } from '@mui/material'

type TodoTitleProps = {
  title: string
  completed: boolean
}

const TodoTitle = ({ title, completed }: TodoTitleProps) => {
  if (completed) {
    return (
      <Typography variant="body1" color={'#aaa'}>
        <s>{title}</s>
      </Typography>
    )
  } else {
    return <Typography variant="body1">{title}</Typography>
  }
}

export default TodoTitle
