import React from 'react';
import image1 from '../assets/images/pexels-4 1.png';
import blacktea from '../assets/images/black-tea-holder.png';
import greentea from '../assets/images/green-tea-holder.png';
import whitetea from '../assets/images/white-tea-holder.png';

function Home() {
    return(
        <div className='home-container'>
            <img src={image1} alt="background"></img>

            <h1>THE TEA SHRINE</h1>
            <h3>Discover the finest tea blends</h3>

            <button type='button'>SHOP NOW</button>

            <div className='tea-grid'>
                <img src={blacktea} alt=""></img>
                <img src={greentea} alt=""></img>
                <img src={whitetea} alt=""></img>
            </div>
            <hr></hr>

            <button type='button' className='browse-btn'>BROWSE ALL BLENDS</button>
        </div>
    )
}

export default Home;