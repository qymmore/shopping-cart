import React, { useEffect } from 'react';
import '../App.css';

function Home() { 
    useEffect(() => {
        document.body.className = "blobs-active";

        return() => (document.body.classList ="")
    }, []);
    return(
        // <div className='home-container'>
        //     <span className='welcome-text'>coolest eggsperience you will ever have</span>

        //     <button type='submit' className='shop-btn'>shop now</button>
        // </div>
        <main className='home'>
            <div className='info'>
                <div className='slogan'>
                    <h1>coolest eggsperience</h1>
                    <h1>you will ever have</h1>
                </div>
                <button className='btn btn-shop'>shop now</button>
            </div>
        </main>
    )
}

export default Home;