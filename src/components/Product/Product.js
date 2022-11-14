import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {name, seller, img, stock , price, key, shipping } =props.product;
    return (
        <div className='product'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h4><Link to={'/product/'+key}>{name}</Link></h4>
                <div className="deep">
                    <div className="deep1">
                        <p><small>By: {seller}</small></p>
                        <p><b>Price: ${price}</b></p>
                        <p><small>Only {stock} left in sctock - Order Soon</small></p>
                    </div>
                    <div className="deep2">
                        <p><b>Shipping Cost: ${shipping}</b></p>
                    </div>
                </div>
                {   props.showButton &&
                    <button onClick={()=>props.cartHandler(props.product)} className='cart-button'><FontAwesomeIcon icon={faShoppingCart}/> Add To Cart</button>
                    ||
                    <button onClick={()=>props.cartHandler(props.product)} className='cart-button'><FontAwesomeIcon icon={faXmark}/> Remove</button>
                }
            </div>
        </div>
    );
};

export default Product;