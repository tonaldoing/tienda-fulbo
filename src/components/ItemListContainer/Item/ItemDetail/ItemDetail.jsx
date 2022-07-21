import * as React from 'react';
import ItemCount from '../../Item/ItemCount';
import './ItemDetail.css';


export default function ItemDetail({detail}) {

    return ( 
        <div class="detail-container">
            <div class="detail-image-container">
                <img src={detail.image} alt={detail.description}/>
            </div>
            <div class="detail-desc-container">
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
                <div class="detail-desc-container-box">
                    <p>$ {detail.price}</p>
                    <ItemCount initial={1} items={detail.stock} />
                </div>
            </div>
        </div>
    );

}