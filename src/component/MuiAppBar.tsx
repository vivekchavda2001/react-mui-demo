import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
export const MuiAppBar = () => {
  console.log(process.env)
  return (
    <AppBar position='static'>
        <Toolbar>
           
             <Typography  variant='h6' component='div' sx={{ flexGrow: 1}}>
                    {process.env.REACT_APP_TITLE}
             </Typography>
            
            <Stack direction='row' spacing={2}>
                <Button color='inherit'> Feature </Button>
                <Button color='inherit'> Pricing </Button>
                <Button color='inherit'> About </Button>
                <Button color='inherit'> Login </Button>
            </Stack>
        </Toolbar>

    </AppBar>
  )
}
