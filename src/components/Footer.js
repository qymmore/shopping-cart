import React from 'react';
import github from '../assets/logo/github.png';

function Footer() {
    return(
        <div className='footer'>
            <span className='footer-text'>© 2022 eggspression</span><a href='#'><img src={github} alt=""></img></a>
        </div>
    )
}

export default Footer;