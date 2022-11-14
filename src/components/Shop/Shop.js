import React, {  useEffect, useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Shop = () => {
    const products = fakeData.slice(0,10)
    
    const [cart, setCart] = useState([])


    useEffect(()=>{
        const saveCart =getDatabaseCart()
        const productKeys = Object.keys(saveCart)
        const previousCart= productKeys.map(existingKey=>{
            const product =fakeData.find(pd=> pd.key === existingKey)
            product.quantity =saveCart[existingKey]
            return product
        })
        setCart(previousCart)

    },[])
    const cartHandler=(product)=>{
        const toBeAddedKey = product.key
        const sameProduct =cart.find(pd=> pd.key === product.key)
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity +1;
            sameProduct.quantity = count;
            const others =cart.filter(pd=> pd.key!== toBeAddedKey) 
            newCart = [...others,sameProduct]
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart)
        addToDatabaseCart(product.key , count)
    }
    
   

    
    
    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(product=> <Product showButton={true} key={product.key} cartHandler={cartHandler} product={product}></Product> )
                }
            </div>
            <div className="cart">
                <Cart cart= {cart}><Link to="/review"><button className='cart-button'> <FontAwesomeIcon icon={faShoppingCart}/> Shop Now  </button></Link></Cart>
            </div>
        </div>
    );
};

export default Shop;