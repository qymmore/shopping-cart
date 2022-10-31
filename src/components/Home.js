import React from 'react';
import image1 from '../assets/images/pexels-4 1.png';
import teashrine from '../assets/images/THE TEA SHRINE.png'

function Home() {
    return(
        <div className='home-container'>
            <img src={image1} alt="background"></img>

            <h1>THE TEA SHRINE</h1>
            <h3>Discover the finest tea blends</h3>

            <button type='button'>SHOP NOW</button>
        </div>
    )
}

export default Home;