import React from 'react'
import Item from '../Item/Item'
import {Box, Grid} from '@mui/material';

function ItemList (props){
    return(
        
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
            {
                props.products.map(
                    productItem => <Grid key={productItem.id} item xs={3}><Item detail={productItem}/></Grid>
                )
            }
            </Grid>

        </Box>
    )
}

export default ItemList;