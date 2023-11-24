import React, { useState } from 'react'
import { Stack, Rating} from '@mui/material'
export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null)
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number|null)=>{
        setValue(newValue);
  }
  return (
   <Stack spacing={2}>
     <Rating value={value} onChange={handleChange} precision={0.5} size='large'></Rating>
   </Stack>
  )
}
