import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div>
            <div className="image">
                <img src={logo} alt="" />
            </div>
            <div className="background">
            <div className="nav">
                <a href="/shop">Shop</a>
                <a href="/review">Review Cart</a>
                <a href="/manage">Manage Inventory</a>
            </div>
            </div>
        </div>
    );
};

export default Header;