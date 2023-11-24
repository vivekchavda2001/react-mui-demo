import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const MuiCard = () => {
    return (
        <Box width='300px' margin='100px'>
            <Card>
                <CardMedia 
                    component='img'
                    height='140'
                    image='https://source.unsplash.com/random'
                >
                </CardMedia>
                <CardContent>
                    <Typography variant='h5' component='div'>The Most Successfull Billionaire.</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis necessitatibus harum earum laudantium minus provident ipsum aliquam sit repudiandae quibusdam voluptates animi hic delectus saepe, fugit maiores inventore deleniti?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More...</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
