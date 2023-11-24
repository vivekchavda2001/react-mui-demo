import { Box, Grid } from '@mui/material'
import React from 'react'

export const MuiGrid = () => {
  return (
    <Grid container my={6}>
        <Grid item>
                <Box bgcolor='primary.light' p={2} >Item 1</Box>
        </Grid>
        <Grid item>
                <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item>
                <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item>
                <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
    </Grid>
  )
}
