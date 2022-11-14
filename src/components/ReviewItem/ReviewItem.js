import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Cart from '../Cart/Cart';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name , seller, price, quantity , shipping,key} = props.product;
    
    return (
        <div className='review-area'>
            <div className="product-area-new">
                <h4>{name}</h4>
                <div className="details-new">
                    <div className="left-section-new">
                        <p style={{color: 'rgb(255, 119, 0)'}}><b>Price: ${price}</b></p>
                        <p><small>sold by: {seller}</small></p>
                        <p><b>Quantity: {quantity}</b></p>
                        <button onClick={()=> props.removeCart(key)} className='cart-button'><FontAwesomeIcon icon={faXmark}/> Remove</button>
                    </div>
                    <div className="right-section-new">
                        <p> <input type="radio" /><b>Shipping Fee:</b></p>
                        <p><small style={{color: 'lightgrey'}}>${shipping} - Regular Shipping</small></p>
                    </div>
                </div>
            </div>
            <div className="cart-area">
                {/* <Cart cart={props.product}></Cart> */}
            </div>
        </div>
    );
};

export default ReviewItem;