import React from 'react';
import tea from '../assets/images/tea-64.png';
import cart from '../assets/images/cart-11-64.png';
// import image1 from '../assets/images/pexels-4 1.png';

function Nav() {
    return(
        <div className='nav-container'>
            {/* <img src={image1} alt="background"></img> */}

            <div className='nav-items'>
                <img src={tea} alt="tea"></img>

                <div className='nav-list'>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <img src={cart} alt="cart"></img>

                <div className='ellipse'></div>
        
            </div>
        </div>
    )
}

export default Nav;