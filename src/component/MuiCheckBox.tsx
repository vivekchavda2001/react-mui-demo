import React from 'react'
import {Box, FormControlLabel, Checkbox} from '@mui/material'
export const MuiCheckBox = () => {
  return (
   <Box>
     <Box>
        <FormControlLabel label='I Accept term and Condition' control={<Checkbox/>}></FormControlLabel>
     </Box>
   </Box>
  )
}
