import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import React from 'react'

export const MuiBottomNavigation = () => {
  return (
   <BottomNavigation sx={{width:'100%', position:'absolute', bottom: 0}}>
     <BottomNavigationAction label='Home' icon={<HomeIcon></HomeIcon>}></BottomNavigationAction>
     <BottomNavigationAction label='Favorites'></BottomNavigationAction>
     <BottomNavigationAction label='Profile'></BottomNavigationAction>
   </BottomNavigation>
  )
}
