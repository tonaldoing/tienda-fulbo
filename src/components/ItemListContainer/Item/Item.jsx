import * as React from 'react';
import {Link} from 'react-router-dom';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography } from '@mui/material';

import './Item.css' 

export default function Item(props) {

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
              <Link to= {`/item/${props.detail.id}`}> 
                <Button variant="outlined">
                Details
                </Button>
              </Link>
            </div>
        </CardActions>

      </Card>
    </>
  );
}
