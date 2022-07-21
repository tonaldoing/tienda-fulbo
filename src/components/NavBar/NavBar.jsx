import * as React from 'react';
import {Link} from 'react-router-dom';
import {IconButton, Toolbar, Box, AppBar, Typography, Button, Divider } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget/CartWidget'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} 
            className="logo">
                Vivimos Fútbol
            </Link>
          </Typography>

          <Button color="inherit">
            <Link to={"/category/camisetas"} >
                Camisetas
            </Link>
          </Button>


          <Button color="inherit">
            <Link to={"/category/buzos"} >
                Buzos
            </Link>
          </Button>

          <Button color="inherit">
            <Link to={"/category/pantalones"} >
                Pantalones
            </Link>
          </Button>
          
          <Divider orientation="vertical" variant="middle" flexItem />

          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
