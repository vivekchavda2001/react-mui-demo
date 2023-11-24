import { Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export const MuiSelect = () => {
  const [country,setCountry] = useState('');
  const hadnleChange  = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setCountry(event.target.value as string)
  }
  return (
   <>
   <Box width='250px'>
    <TextField label='Select Country' select value={country} onChange={hadnleChange} fullWidth>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
    </TextField>
   </Box>
   </>
  )
}
