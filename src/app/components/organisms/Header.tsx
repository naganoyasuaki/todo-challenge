'use client'

import { Box, Radio, RadioGroup, FormControl, FormControlLabel, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

type HeaderProps = {
  onSetFilter: (filter: string) => void
}

const Header = ({ onSetFilter }: HeaderProps) => {
  const handleSetFilter = (event: ChangeEvent<HTMLInputElement>) => {
    onSetFilter(event.target.value)
  }

  return (
    <Box height={200} width="100%" sx={{ position: 'relative', p: 2 }}>
      <Box height={120} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h3" fontWeight={400}>
          Todo List
        </Typography>
      </Box>
      <Box width="100%" sx={{ position: 'absolute', bottom: 8 }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <FormControl>
            <RadioGroup row onChange={handleSetFilter} defaultValue={'all'}>
              <FormControlLabel value="all" control={<Radio size="small" />} label="All" />
              <FormControlLabel value="active" control={<Radio size="small" />} label="Active" />
              <FormControlLabel
                value="completed"
                control={<Radio size="small" />}
                label="Completed"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
