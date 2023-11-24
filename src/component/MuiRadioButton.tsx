import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@mui/material'

export const MuiRadioButton = () => {
  return (
   <Box>
     <FormControl>
        <FormLabel id='job-experiance-group-label'> Years of Experiance</FormLabel>
        <RadioGroup name='job-experience-group-label' aria-aria-labelledby='job-experiance-group-label'>
            <FormControlLabel control={<Radio/>} label='0-2' value='0-2'></FormControlLabel>
            <FormControlLabel control={<Radio/>} label='3-5' value='3-5'></FormControlLabel>
            <FormControlLabel control={<Radio/>} label='6-10' value='6-10'></FormControlLabel>
        </RadioGroup>
     </FormControl>
   </Box>
  )
}
