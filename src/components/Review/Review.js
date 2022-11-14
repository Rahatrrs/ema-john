import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import thanks from '../../images/new.gif'

const Review = () => {
    
    const [ordered, setOrdered] = useState(false)
    const placeOrder=()=>{
        setCart([])
        setOrdered(true)
        clearLocalShoppingCart();
    }

    const [cart, setCart] = useState([])
    const removeCart=(productKey)=>{
        const newCart= cart.filter(pd=> pd.key!==productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }

    useEffect(()=>{
        const savedCart= getDatabaseCart();
        const productKeys= Object.keys(savedCart);
        const cartProducts = productKeys.map(key=>{
                const product = fakeData.find(pd=> pd.key===key);
                product.quantity= savedCart[key];
                return product;
            })
            setCart(cartProducts)
            console.log(cart.length)

        },[])
        
        let  thankYou;
        if(ordered){
            thankYou = <img src={thanks} alt="" />
        }
    return (
        <div className='all' style={{display: 'flex'}}>
            <div className="first">
            {
                cart.map(product=> <ReviewItem  removeCart={removeCart} product={product}></ReviewItem> )
                
            }
            {thankYou}
            
            </div>
            <div className="second">
                <Cart cart={cart}>
                    <button onClick={placeOrder} className='cart-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;