import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from './Item/Item';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item/>
      </Grid>
      <Grid item xs={4}>
        <Item/>
      </Grid>
      <Grid item xs={4}>
        <Item/>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid({title}) {
  return (
    <>
    <Box sx={{ 
      flexGrow: 1,
      padding: '1rem',
      'max-width': '1200px',
      margin: 'auto' 
    }}>    
        <Divider textAlign="left">
          <Typography variant="h5" sx={{ 
              margin: '2rem' 
            }}>
            {title}
          </Typography>
        </Divider>
      <Grid container spacing={5}>
        <Grid container item spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
    </>

  );
}
