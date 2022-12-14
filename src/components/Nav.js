import React, { useState } from 'react';
import logo from '../assets/logo/fried-egg 1.svg';
import bag from '../assets/logo/shopping-bag (1).png';
import {Link} from 'react-router-dom';

function Nav() {

    const [cartItems, setCartItems] = useState(0);

    return(
        <header>
            <img src={logo} alt="logo"></img>

            <div className='nav-items'>
                <ul>
                    <li><Link to={"/shopping-cart"}>Home</Link></li>
                    <li><Link to={"/shopping-cart/products"}>Products</Link></li>
                </ul>

                <div className='shopping-cart'>
                    <img src={bag} alt=""></img>
                    <span>Cart: {cartItems}</span>
                </div>
            </div>
        </header>
    )
}

export default Nav;