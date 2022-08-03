import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../Item/ItemCount';
import './ItemDetail.css';
import {useCartContext} from '../../../../contexts/CartContext';  

export default function ItemDetail({detail}) {

    const [goToCart, setGoToCart] = useState(false);
    const {addItem} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addItem(detail, quantity);
    };

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

                        {
                            goToCart
                                ? <Link to="/cart"> Finalizar Compra </Link>
                                : <ItemCount initial={1} items={product_detail.stock} onAdd={onAdd}/> 
                        }
                        
                    </div>
                </div>
            </div>   
        )

    );

}