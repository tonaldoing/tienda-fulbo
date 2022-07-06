import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, ButtonBase } from '@mui/material';

import prod_placeholder from '../../../images/prods/camiseta-adidas-argentina-2021.jpg' 
import ItemCount from './ItemCount' 
import './Item.css' 

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={prod_placeholder} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                AFA Argentina
              </Typography>
              <Typography variant="body2" gutterBottom>
                Camiseta Local Oficial 2021
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.000,00
            </Typography>
          </Grid>
        </Grid>
        <ItemCount initial={1} items={20} />
      </Grid>
    </Paper>
  );
}
