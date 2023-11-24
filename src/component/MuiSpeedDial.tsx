import React from 'react'
import { SpeedDial, SpeedDialAction,SpeedDialIcon } from '@mui/material'
export const MuiSpeedDial = () => {
  return (
    <SpeedDial ariaLabel='Navigation Speed Dial'
     sx={{ position:'absolute', bottom:16, right:16}}
    icon={<SpeedDialIcon></SpeedDialIcon>}
   >
     <SpeedDialAction tooltipTitle='Copy'></SpeedDialAction>
     <SpeedDialAction tooltipTitle='paste'></SpeedDialAction>
     <SpeedDialAction tooltipTitle='delete'></SpeedDialAction>
    </SpeedDial>
  )
}
