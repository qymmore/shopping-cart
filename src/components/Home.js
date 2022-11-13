import React, { useEffect } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Home() { 
    useEffect(() => {
        document.body.className = "blobs-active";

        return() => (document.body.classList ="")
    }, []);
    return(
        <main className='home'>
            <div className='info'>
                <div className='slogan'>
                    <h1>coolest eggsperience</h1>
                    <h1>you will ever have</h1>
                </div>
                <Link to={'/shopping-cart/products'}><button className='btn btn-shop'>shop now</button></Link>
            </div>
        </main>
    )
}

export default Home;