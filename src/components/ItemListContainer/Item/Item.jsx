import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import ItemCount from './ItemCount' 
import './Item.css' 

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Item(props) {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return ( 
    <>
      <Card>

      <CardMedia
        component="img"
        alt={props.detail.title}
        height="200"
        image={props.detail.image}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.detail.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.detail.description}
        </Typography>
        <Typography variant="body1" color="text.primary" component="div">
          ${props.detail.price}
        </Typography>
      </CardContent>

      <CardActions>
          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
            Agregar al carrito
            </Button>
            <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  {props.detail.title}
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Cerrar
                </Button>
              </Toolbar>
            </AppBar>
            
            <ItemCount initial={1} items={props.detail.stock} />

            </Dialog>
          </div>
      </CardActions>
    </Card>
    </>
  );
}
