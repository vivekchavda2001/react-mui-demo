import { Box, Drawer, IconButton, Typography } from '@mui/material'
export const MuiDrawer = () => {
  return (
    <Drawer anchor='left' open={false}>
      <IconButton size='large'>
      </IconButton>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
                   Drawer
            </Typography>
        </Box>
    </Drawer>
  )
}
