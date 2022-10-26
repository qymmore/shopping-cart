import React from 'react';

function Nav() {
    return(
        <div className='nav-container'>

            <div className='nav-items'>
                <div className='title'>
                    <p>Store Name</p>
                </div>

                <ul className='nav-list'>
                    <li><a href='http://localhost:3002/shopping-cart/'>Home</a></li>
                    <li><a href='http://localhost:3002/shopping-cart/products'> Products</a></li>
                    <li><a href='http://localhost:3002/shopping-cart/contact'>Contact</a></li>
                    <li>Your Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;