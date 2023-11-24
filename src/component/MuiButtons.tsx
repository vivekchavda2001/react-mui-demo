import React from 'react'
import {Stack,Button, ButtonGroup} from '@mui/material'
export const MuiButtons = () => {
  return (
    <>
    <Stack spacing={2} direction='column'>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com' target='_blank'>Text</Button><br />
            <Button variant='contained'>Contained</Button><br/>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>primary</Button><br/>
            <Button variant='contained' color='secondary'>Secondary</Button><br/>
            <Button variant='contained' color='error'>Error</Button><br/>
            <Button variant='contained' color='warning'>Warning</Button><br/>
            <Button variant='contained' color='info'>Info</Button><br/>
            <Button variant='contained' color='success'>Success</Button><br/>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' onClick={()=>alert('Send Clicked')}>Send</Button>
        </Stack>
        <Stack spacing={2} direction='row' >
            <ButtonGroup variant='outlined' orientation='vertical' aria-label='alignment button group'>
                <Button  size='small'>Left</Button>
                <Button  size='small'>Center</Button>
                <Button  size='small'>Right</Button>
            </ButtonGroup>
        </Stack>    
    </Stack>
    </>
  )
}
