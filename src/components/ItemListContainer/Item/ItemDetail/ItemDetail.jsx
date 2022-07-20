import * as React from 'react';
import ItemCount from '../../Item/ItemCount'


export default function ItemDetail({detail}) {

    return ( 
        <div>
        <h3>{detail.title}</h3>
            <p>{detail.description}</p>
            <ItemCount initial={1} items={detail.stock} />
        </div>
    );

}