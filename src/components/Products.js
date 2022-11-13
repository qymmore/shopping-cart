import React from 'react';
import Nav from './Nav';
import scotchEggs from '../assets/images/scotch-eggs.jpeg';
import eggBenny from '../assets/images/egg-benedict.jpeg';
import frittata from '../assets/images/frittata.jpeg';
import devilEgg from '../assets/images/devil-egg.jpeg';
import eggMasala from '../assets/images/egg-masala.jpeg';
import scramble from '../assets/images/scramble.jpeg';

function Products() {
    const items = [
        {
            image: scotchEggs,
            title: "scotch eggs",
            price: 4.50,
        },
        {
            image: eggBenny,
            title: "eggs benedict",
            price: 5.50,
        },
        {
            image: frittata,
            title: "frittata",
            price: 4.99,
        },
        {
            image: devilEgg,
            title: "devilled eggs",
            price: 1.99,
        },
        {
            image: eggMasala,
            title: "egg masala",
            price: 8.00,
        },
        {
            image: scramble,
            title: "scrambled eggs",
            price: 6.85,
        }
    ]

    return(
        <div className='products-container'>
            <Nav />
            <main className='products'>
            {items.map((item) => {
                return(
                 <div className='items'>
                    <img src={item.image} alt=""/>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                 </div>
                )
            })}
        </main>
        </div>
        
    )
}

export default Products;