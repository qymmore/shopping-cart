import React, { useEffect } from 'react';
import '../App.css';

function Home() {
    useEffect(() => {
        document.body.className = 'blobs-active';

        return() => (
            document.body.classList = ""
        )
    }, []);

    return(
        <div className='home-container'>
            <span className='welcome-text'>coolest eggsperience you will ever have</span>

            <button type='submit' className='shop-btn'>shop now</button>
        </div>
    )
}

export default Home;