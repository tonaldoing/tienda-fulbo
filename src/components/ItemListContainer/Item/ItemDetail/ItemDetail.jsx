import * as React from 'react';
import ItemCount from '../../Item/ItemCount';
import './ItemDetail.css';


export default function ItemDetail({detail}) {

    console.log(detail);
    return ( 

        detail.map(
            product_detail => 
        
            <div className="detail-container">
                <div className="detail-image-container">
                    <img src={product_detail.image} alt={product_detail.description}/>
                </div>
                <div className="detail-desc-container">
                    <h3>{product_detail.title}</h3>
                    <p>{product_detail.description}</p>
                    <div className="detail-desc-container-box">
                        <p>$ {product_detail.price}</p>
                        <ItemCount initial={1} items={product_detail.stock} />
                    </div>
                </div>
            </div>
            
            
        )
    );

}