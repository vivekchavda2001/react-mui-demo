import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const MuiAccordian = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion Header</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the content of the Accordion. It can include any HTML or React components.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
