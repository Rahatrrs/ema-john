
import React from 'react';
import './Cart.css'

const Cart = (prop) => {
    const cart = prop.cart;
    let productPrice=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        productPrice=productPrice+product.price*product.quantity;
        
    }
    let shippingCost= 15.99;
    if(productPrice>50){
        shippingCost = 12.99;
    }
    if(productPrice>80){
        shippingCost = 4.99;
    }
    if(productPrice>100){
        shippingCost = 0;
    }
    if(productPrice===0){
        shippingCost =0;
    }
    const vat= productPrice/10;

    return (
        <div style={{textAlign: 'center', fontWeight: '700'}}>
            <h3>Order Summary</h3>
            <div style={{display:'flex'}}>
                <p style={{width: '50%'}}>Items Ordered: </p>
                <p style={{marginLeft:'150px'}}>{cart.length}</p>
            </div>
            <div style={{display:'flex'}}>
                <p style={{width: '50%'}}>Product Price: </p>
                <p style={{marginLeft:'150px'}}>${productPrice.toFixed(2)}</p>
            </div>
            <div style={{display:'flex'}}>
                <p style={{width: '50%'}}>Shipping Cost: </p>
                <p style={{marginLeft:'150px'}}><small>${shippingCost}</small></p>
            </div>
            <div style={{display:'flex'}}>
                <p style={{width: '50%'}}>Tax + VAT : </p>
                <p style={{marginLeft:'150px'}}><small>${vat.toFixed(2)}</small></p>
            </div>
            <div style={{display:'flex'}}>
                <h3 style={{width: '50%'}}>Total Price:</h3>
                <h3 style={{marginLeft:'150px'}}>{(productPrice+shippingCost+vat).toFixed(2)}</h3>
            </div>
            {
                prop.children
            }
        </div>
    );
};

export default Cart;