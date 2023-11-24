import { Stack, TextField } from '@mui/material'
import React from 'react'

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Small Secondary' size='small' color='primary'/>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='Form Lable' required/>
            <TextField label='Form Lable' helperText='Do not share details' disabled/>
        </Stack>
    </Stack>
  )
}
