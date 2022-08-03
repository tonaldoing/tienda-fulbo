import * as React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext} from 'react'
import CartContext from '../../../contexts/CartContext'

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 20,
    padding: '0 4px',
    'font-size' : '8px'
  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={1} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
