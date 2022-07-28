import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../../Item/ItemCount';
import './ItemDetail.css';
import {CartContext} from '../../../../contexts/CartContext';  

export default function ItemDetail({detail}) {

    const {setCartItems} = useContext(CartContext);

    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    const onAdd = (amount) => {
        setAmount(amount);
        setCartItems((prevState) => {
            console.log(prevState);
            return [...prevState, detail];
        });
        navigate('/cart');
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
                        { amount == 0 ? (
                            <ItemCount initial={1} items={product_detail.stock} onAdd={onAdd}/> 
                        ) : (
                            <h1>Holis</h1>
                        )
                        }
                    </div>
                </div>
            </div>   
        )

    );

}