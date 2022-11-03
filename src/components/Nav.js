import React, { useState } from 'react';
import logo from '../assets/logo/fried-egg 1.svg';
import bag from '../assets/logo/shopping-bag (1).png';

function Nav() {

    const [cartItems, setCartItems] = useState(0);

    return(
        <div className='nav-container'>
            <img src={logo} alt="logo"></img>

            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                </ul>

                <div className='shopping-cart'>
                    <img src={bag} alt=""></img>
                    <span>Cart: {cartItems}</span>
                </div>
            </div>
        </div>
    )
}

export default Nav;