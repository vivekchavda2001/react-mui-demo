import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const images = [
    {
      url: 'https://source.unsplash.com/random/1',
    },
    {
      url: 'https://source.unsplash.com/random/2',
    },
    {
      url: 'https://source.unsplash.com/random/3',
    },
    {
      url: 'https://source.unsplash.com/random/4',
    },
    {
      url: 'https://source.unsplash.com/random/5',
    },
    {
      url: 'https://source.unsplash.com/random/6',
    },
  ];
  
  const titles = [
    'Beautiful Sunset',
    'City Skyline at Night',
    'Majestic Mountains',
    'Tropical Paradise',
    'Serene Beach',
    'Lush Green Forest'
  ];
  
  const descriptions = [
    'A stunning sunset with vibrant colors reflecting on the water.',
    'The city lights create a breathtaking skyline against the dark night sky.',
    'The majestic mountains reach high into the sky with snow-capped peaks.',
    'Palm trees and white sandy beaches create a perfect tropical getaway.',
    'Relax on a serene beach with crystal-clear waters and soft sand.',
    'Explore a lush green forest with diverse wildlife and natural beauty.'
  ];
  
  // Create a new array "items" with the desired structure
  const items = images.map((image, index) => ({
    url: image.url,
    title: titles[index],
    description: descriptions[index],
  }));

const MuiImageList = () => {
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {items.map((data, index) => (
        <Box key={index} width="300px" margin="16px">
          <Card>
            <CardMedia component="img" height="140" image={data.url} />
            <CardContent>
              <Typography variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More...</Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default MuiImageList;
